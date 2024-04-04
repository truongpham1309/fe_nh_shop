import axios from "axios";

export const getAllCategories = async () => {
    try {
        const { data } = await axios.get('/categories');
        return data
    } catch (error) {
        console.log(error);
    }
}