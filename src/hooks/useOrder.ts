import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { cancelOrder, createOrderByUserID, getAllOrderByUserID, getDetailsOrder, updateStatusOrder } from "../services/orderService"
import { TInputOrder } from "../types/order";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export const useQueryOrder = ({ _id }: { _id?: string }) => {
    const order = useQuery({
        queryKey: ['ORDER', _id],
        queryFn: async () => {
            return _id ? await getDetailsOrder(_id) : await getAllOrderByUserID();
        },
    })

    return { ...order }
}

export const useOrderMutation = ({ type }: { type: "ADD" | "UPDATE" | "CANCEL" }) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const form = useForm();
    const mutation = useMutation({
        mutationFn: async (order: any) => {
            switch (type) {
                case "ADD": return await createOrderByUserID((order as TInputOrder));
                case "UPDATE": return await updateStatusOrder(order._id);
                case "CANCEL": return window.confirm('Are you sure you want to cancel?') ?? await cancelOrder(order);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['ORDER'],
            })
        }
    })

    const onSubmit: SubmitHandler<any> = (data) => {
        mutation.mutate(data);
        navigate('/order');
    }

    return { ...form, mutation, onSubmit }
}

export const useUpdateStatusOrderByAdmin = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async (order: any) => {
            return await updateStatusOrder(order._id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['ORDER_ADMIN']
            })
        }
    })

    return {...mutation}
}