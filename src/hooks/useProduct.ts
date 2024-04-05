import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createProduct, getAllProducts, getDetailProduct, removeProduct, updateProductsByID } from "../services/productsService";
import { TInputProduct } from "../types/products";
import { uploadImage, uploadSomeImage } from "../utils/uploadImage";

const useProductQuery = ({ id = "", page = 1, limit = 0 }) => {
    const { data, isLoading, isError, ...rest } = useQuery({
        queryKey: ['PRODUCTS', id],
        queryFn: async () => {
            // Xử lý trường hợp id rỗng
            if (!id) {
                const products = await getAllProducts(page, limit);
                return products || [];
            } else {
                const product = await getDetailProduct(id);
                return product;
            }
        }
    })
    return { data, isLoading, isError, ...rest }
}

export const useProductMutation = ({ type }: { type: 'ADD' | "UPDATE" | "REMOVE" }) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const mutation = useMutation({
        mutationFn: async (product: any) => {
            switch (type) {
                case "REMOVE":
                    return window.confirm("Bạn có chắc chắn muốn xóa?") && await removeProduct(product._id);
                case "ADD":
                    const gallery_url = await uploadSomeImage(product.gallery);
                    const newProduct = { ...product, gallery: [...gallery_url] };
                    return await createProduct(newProduct);
                case "UPDATE":
                    return await updateProductsByID(product);
                default: return {};
            }
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["PRODUCTS"],
            });
            navigate("/admin");
        }
    })

    const onSubmit: SubmitHandler<any> = async (product: TInputProduct) => {

        const secret_url = typeof product.image === "string" ? product.image : await uploadImage(product.image);
        const currentProduct = {
            _id: product._id,
            product_name: product.product_name,
            price: product.price,
            category: product.category,
            image: secret_url,
            feature: product.feature,
            countStocks: product.countStocks,
            gallery: [...product.gallery],
        }
        const newProduct = typeof product.tags === "string" ?
            { ...currentProduct, tags: [product.tags] } : { ...currentProduct, tags: [...product.tags] };
        mutation.mutate(newProduct);
    }
    return { ...mutation, register, handleSubmit, reset, errors, onSubmit }
}

export default useProductQuery