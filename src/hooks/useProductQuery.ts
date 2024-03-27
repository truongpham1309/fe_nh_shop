import { useQuery } from "@tanstack/react-query"
import { getAllProducts, getDetailProduct } from "../services/productsService"
import axios from "axios"

const useProductQuery = (id?: string, page: number = 1, limit: number = 12) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['PRODUCT'],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:8000/api/products");
            console.log(data);
            return data
        }
    })
    return { data, isLoading, isError }
}


export default useProductQuery