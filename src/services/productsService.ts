import axios from "axios";
import { TProduct } from "../types/products";

export const getAllProducts = async (page: number = 1, limit = 0) => {
    try {
        const { data } = await axios.get(`/products?page=${page}&limit=${limit}`);
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getDetailProduct = async (id: string) => {
    try {
        const { data } = await axios.get(`/products/${id}`);
        return (data as TProduct)
    } catch (error) {
        console.log(error);
    }
}

export const getAllProductsByCategory = async ({ id, page = 1, limit = 4 }: {id: string, page?: number, limit?: number}) => {
    try {
        const { data } = await axios.get(`/products/category/${id}?page=${page}&limit=${limit}`);
        return data
    } catch (error) {
        console.log(error);
    }
}