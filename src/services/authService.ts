import axios from "axios";
import { TRegister, TUser } from "../types/login";
import { toast } from "react-toastify";

export const loginService = async (user: TUser) => {
    try {
        const { data } = await axios.post("/auth/login", user);
        return data
    } catch (error) {
        toast.error("Email or password incorrect");
        console.log(error);
    }
}

export const registerService = async (user: TRegister) => {
    try {
        await axios.post("/auth/register", user);
    } catch (error: any) {
        toast.error("Đăng kí thất bại", error.message)
        console.log(error);
    }
}