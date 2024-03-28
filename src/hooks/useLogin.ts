import axios from "axios";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authorizationContext } from "../contexts/Authenzication";
import { TUser } from "../types/login";
import { toast } from "react-toastify";


export const useLogin = () => {
    const login = useForm<TUser>();
    const [token, setToken, removeToken] = useContext(authorizationContext);
    const navigate = useNavigate();

    const onLogin: SubmitHandler<TUser> = async (user) => {
        try {
            const { data } = await axios.post('/auth/login', user);
            if (token) {
                removeToken();
                setToken(data.token);
                toast.success("Đăng nhập thành công");
                setTimeout(() => {
                    navigate('/');
                }, 1000)
            }
            setToken(data.token);
            toast.success("Đăng nhập thành công");
            setTimeout(() => {
                navigate('/');
            }, 1000)
        } catch (error) {
            console.log(error);
        }
    }

    return { login, onLogin }
}