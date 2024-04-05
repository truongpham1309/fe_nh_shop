import axios from "axios";
import { TInputProduct, TProduct } from "../types/products";
import { toast } from "react-toastify";

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

export const getAllProductsByCategory = async ({ id, page = 1, limit = 4 }: { id: string, page?: number, limit?: number }) => {
    try {
        const { data } = await axios.get(`/products/category/${id}?page=${page}&limit=${limit}`);
        return data
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = async (product: TInputProduct) => {
    try {
        return await axios.post("/products", product);
    } catch (error: any) {
        toast.warning(error.response.message || "Thêm sản phẩm thất bại!");
        console.log(error);
    }
}

export const removeProduct = async (_id: string) => {
    try {
        await axios.put(`/products/delete/${_id}`);
    } catch (error: any) {
        toast.error(error?.response?.message || "Xóa thất bại!");
        console.log(error);
    }
}

export const updateProductsByID = async (product: TInputProduct) => {
    try {
        await axios.put(`/products/${product._id}`, product);
    } catch (error: any) {
        toast.warning(error.response.message || "Cập nhật sản phẩm thất bại!");
        console.log(error);
    }
}

export const getProductDetailAdmin = async (id: string) => {
    try {
        const { data } = await axios.get(`/products/admin/${id}`);
        return data
    } catch (error) {
        console.log(error);
        return {};
    }
}
