import axios from "axios";
import { toast } from "react-toastify";
import { TInputCategories } from "../types/categories";

export const getAllCategories = async () => {
    try {
        const { data } = await axios.get('/categories');
        return data
    } catch (error: any) {
        toast.error(error.response.data.message);
        console.log(error);
    }
}

export const getDetailCategoriesByAdmin = async (id: string) => {
    try {
        const { data } = await axios.get(`/categories/${id}`);
        return data;
    } catch (error: any) {
        toast.error(error.response.data.message);
        console.log(error);
    }
}

export const removeCategoriesByIdFromAdmin = async (id: string) => {
    try {
        return await axios.delete(`/categories/${id}`);
    } catch (error: any) {
        toast.error(error.response.data.message);
        console.log(error);
    }
}

export const createNewCategory = async (newCategory: TInputCategories) => {
    try {
        return await axios.post('/categories', newCategory);
    } catch (error: any) {
        toast.error(error.response.data.message);
        console.log(error);
    }
}

export const updateCategoryByIDFromAdmin = async (newCategory: TInputCategories) => {
    try {
        return await axios.put(`/categories/${newCategory._id!}`, newCategory);
    } catch (error: any) {
        toast.error(error.response.data.message);
        console.log(error);
    }

}