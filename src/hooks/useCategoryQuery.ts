import { useQuery } from "@tanstack/react-query"
import { getAllCategories } from "../services/categoriesService"

export const useCategoryQuery = () => {
    const { data, ...rest } = useQuery({
        queryKey: ['CATEGORIES'],
        queryFn: async () => {
            return await getAllCategories();
        }
    })

    return { data, ...rest }
}