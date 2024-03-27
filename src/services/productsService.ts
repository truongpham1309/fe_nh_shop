import axios from "axios";

export const getAllProducts = async (page: number = 1, limit: number = 12) => {
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
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getAllProductsByCategory = async (id: string, page: number = 1, limit: number = 12) => {
    try {
        const { data } = await axios.get(`/products/category/${id}?page=${page}&limit=${limit}`);
        return data
    } catch (error) {
        console.log(error);
    }
}