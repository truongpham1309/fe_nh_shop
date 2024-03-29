import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCart, decrementQuantity, getCartByUserID, incrementQuantity, updateQuantityCartByProductID } from "../services/cartService";

type ActionUpdateQuantityProps = {
    type: "UPDATE" | "INCREMENT" | "DECREMENT"
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
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: async ({ productID, quantity = 1 }: { productID: string, quantity: number }) => {
            await addToCart({ productID, quantity });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['CART']
            })
        }
    })
    return mutation
}

export const useUpdateQuantity = ({ type }: ActionUpdateQuantityProps) => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async ({ productID, quantity }: { productID: string, quantity: number }) => {
            switch (type) {
                case "UPDATE":
                    await updateQuantityCartByProductID({ productID, quantity });
                    break;
                case "INCREMENT":
                    await incrementQuantity({ productID });
                    break;
                case "DECREMENT":
                    await decrementQuantity({ productID });
                    break;
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