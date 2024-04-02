import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCart, decrementQuantity, getCartByUserID, incrementQuantity, removeCartByUserID, updateQuantityCartByProductID } from "../services/cartService";
import { useNavigate } from "react-router-dom";

type ActionUpdateQuantityProps = {
    type: "UPDATE" | "INCREMENT" | "DECREMENT" | "REMOVE"
}


export const useCartQuery = () => {
    const { data, ...cartquery } = useQuery({
        queryKey: ['CART'],
        queryFn: async () => {
            const data = await getCartByUserID();
            return data
        }
    })

    return { data, ...cartquery }
}

export const useAddToCart = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn: async ({ productID, quantity = 1 }: { productID: string, quantity: number }) => {
            return await addToCart({ productID, quantity });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['CART']
            });
            navigate('/cart')
        }
    })
    return mutation
}

export const useUpdateQuantity = ({ type }: ActionUpdateQuantityProps) => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async ({ productID, quantity = 1 }: { productID: string, quantity?: number }) => {
            switch (type) {
                case "UPDATE":
                    return await updateQuantityCartByProductID({ productID, quantity });
                case "INCREMENT":
                     return await incrementQuantity({ productID });
                case "DECREMENT":
                    return await decrementQuantity({ productID });
                case "REMOVE":
                    if (!confirm("Are you sure you want to cart?")) break;
                    return await removeCartByUserID({ productID });
                default: return {};
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['CART']
            })
        }
    })

    return mutation
}