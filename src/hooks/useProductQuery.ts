import { useQuery } from "@tanstack/react-query"
import { getAllProducts, getDetailProduct } from "../services/productsService"

const useProductQuery = ({ id = "", page = 1, limit = 0 }) => {
    const { data, isLoading, isError, ...rest } = useQuery({
        queryKey: ['PRODUCTS', id],
        queryFn: async () => {
            return id ? await getDetailProduct(id) : await getAllProducts(page, limit);
        }
    })
    return { data, isLoading, isError, ...rest }
}


export default useProductQuery