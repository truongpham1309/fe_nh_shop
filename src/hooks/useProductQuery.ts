import { useQuery } from "@tanstack/react-query"
import { getAllProducts, getDetailProduct } from "../services/productsService"

const useProductQuery = ({id = "", page = 1, limit = 0 }) => {
    const { data, isLoading, isError, ...rest } = useQuery({
        queryKey: ['PRODUCTS', id],
        queryFn: async () => {
            // Xử lý trường hợp id rỗng
            if (!id) {
                const products = await getAllProducts(page, limit);
                return products || []; // Trả về danh sách rỗng nếu không có sản phẩm
            } else {
                const product = await getDetailProduct(id);
                return product; // Trả về thông tin chi tiết sản phẩm
            }
        }
    })
    return { data, isLoading, isError, ...rest }
}

export default useProductQuery