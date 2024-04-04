import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createProduct, getAllProducts, getDetailProduct, removeProduct, updateProductsByID } from "../services/productsService";
import { TInputProduct } from "../types/products";

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
                    return createProduct(product);
                case "UPDATE": return await updateProductsByID(product);
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
        const currentProduct = {
            _id: product._id,
            product_name: product.product_name,
            price: product.price,
            category: product.category,
            image: product.image,
            gallery: ['https://res.cloudinary.com/dhfryzrce/image/upload/v1710856000/react_image/vbxldpakol3z1wz2z7dg.png'],
            feature: product.feature,
            countStocks: product.countStocks,
        }
        const newProduct = typeof product.tags === "string" ?
            { ...currentProduct, tags: [product.tags] } : { ...currentProduct, tags: [...product.tags] };
        mutation.mutate(newProduct);
    }
    return { ...mutation, register, handleSubmit, reset, errors, onSubmit }
}

export default useProductQuery