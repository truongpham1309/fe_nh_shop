import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createNewCategory, getAllCategories, getDetailCategoriesByAdmin, removeCategoriesByIdFromAdmin, updateCategoryByIDFromAdmin } from "../services/categoriesService"
import { TInputCategories } from "../types/categories"
import { useNavigate } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import { uploadImage } from "../utils/uploadImage"

export const useCategoryQuery = (id?: string) => {
    const { data, ...rest } = useQuery({
        queryKey: ['CATEGORIES'],
        queryFn: async () => {
            return id ? await getDetailCategoriesByAdmin(id) : await getAllCategories();
        }
    })

    return { data, ...rest }
}

export const useCategoryMutation = ({ type }: { type: "CREATE" | "REMOVE" | "UPDATE" }) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const form = useForm();
    const mutation = useMutation({
        mutationFn: async (category: TInputCategories) => {
            switch (type) {
                case "REMOVE": return await removeCategoriesByIdFromAdmin(category._id!);
                case "CREATE": return await createNewCategory(category);
                case "UPDATE": return await updateCategoryByIDFromAdmin(category);
                default: return;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['CATEGORIES']
            });
            navigate("/admin/categories");
        }
    })

    const onHandleSubmitForm: SubmitHandler<any> = async (category: TInputCategories) => {
        const image_url: string = typeof category.image === 'string' ? category.image : await uploadImage(category.image);
        const newCategory = {
            _id: category?._id,
            category_name: category.category_name,
            image: image_url,
        }

        mutation.mutate(newCategory);
    }

    return { ...mutation, ...form, onHandleSubmitForm }
}