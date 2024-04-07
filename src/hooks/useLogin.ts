import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginService, registerService } from "../services/authService";
import { TRegister } from "../types/login";
import { useSessionStorage } from "./useLocal";

type TAction = {
    type: "LOGIN" | "REGISTER"
}

export const useLogin = ({ type }: TAction) => {
    const login = useForm<TRegister>();
    const [token, setToken, removeToken] = useSessionStorage("token", null);
    const navigate = useNavigate();

    const onLogin: SubmitHandler<TRegister> = async (user) => {
        switch (type) {
            case "LOGIN":
                const data = await loginService(user);
                if(!data) return;
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
                    }, 2000)
                }
                setToken(data);
                toast.success("Đăng nhập thành công");
                setTimeout(() => {
                    navigate('/');
                }, 2000)
                break;
            case "REGISTER": 
                const dataREGISTER = await registerService(user);
                if(!dataREGISTER) return;
                toast.success("Đăng kí thành công, Mời bạn đăng nhập!");
                navigate('/login');
        }
    }

    return { login, onLogin }
}