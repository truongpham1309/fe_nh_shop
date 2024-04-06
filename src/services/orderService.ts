import axios from "axios";
import { toast } from "react-toastify"
import { TInputOrder, TOrder } from "../types/order";

export const getAllOrderByUserID = async () => {
    try {
        const { data } = await axios.get("/orders/user");
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const createOrderByUserID = async (order: TInputOrder) => {
    try {
        const { data } = await axios.post('/orders', order);
        return data;
    } catch (error) {
        toast.warning("Đặt hàng thất bại, vui lòng thử lại!");
        console.log(error);
    }
}

export const cancelOrder = async (order: TOrder) => {
    try {
        return await axios.put(`/orders/cancel/${order._id}`);
    } catch (error: any) {
        toast.warning(error.message);
        console.log(error);
    }
}

export const getDetailsOrder = async (_id: string) => {
    try {
        const { data } = await axios.get(`/orders/detail/${_id}`);
        return data
    } catch (error: any) {
        toast.warning(error.message);
        console.log(error);
    }
}
export const updateStatusOrder = async (_id: string) => {
    try {
        return await axios.put(`/orders/${_id}`);
    } catch (error: any) {
        toast.error(error.response.message);
        console.log(error);
    }
}

export const getAllOrderByAdmin = async () => {
    try {
        const { data } = await axios.get('/orders');
        return data
    } catch (error: any) {
        toast.error(error.response.message);
        console.log(error)
    }
}