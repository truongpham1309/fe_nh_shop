import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authorizationContext } from "../contexts/Authenzication";
import { loginService, registerService } from "../services/authService";
import { TRegister } from "../types/login";

type TAction = {
    type: "LOGIN" | "REGISTER"
}


export const useLogin = ({ type }: TAction) => {
    const login = useForm<TRegister>();
    const [token, setToken, removeToken] = useContext(authorizationContext);
    const navigate = useNavigate();

    const onLogin: SubmitHandler<TRegister> = async (user) => {
        switch (type) {
            case "LOGIN":
                const data = await loginService(user);
                if (token) {
                    removeToken("token");
                    setToken(data);
                    toast.success("Đăng nhập thành công!");
                    setTimeout(() => {
                        if(data.user.role === 'admin') {
                            navigate('/admin');
                            return;
                        }
                        navigate('/');
                    }, 1000)
                }
                setToken(data);
                toast.success("Đăng nhập thành công");
                setTimeout(() => {
                    navigate('/');
                }, 1000)
                break;
            case "REGISTER": 
                await registerService(user);
                toast.success("Đăng kí thành công, Mời bạn đăng nhập!");
                navigate('/login');
        }
    }

    return { login, onLogin }
}