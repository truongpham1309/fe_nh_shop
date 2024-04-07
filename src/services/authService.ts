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
        const { data } = await axios.post("/auth/register", user);
        return data;
    } catch (error: any) {
        toast.error(error.response.data.message)
        console.log(error);
    }
}