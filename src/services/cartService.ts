import axios from "axios"
import { toast } from "react-toastify";

export const addToCart = async ({ productID, quantity = 1 }: { productID: string, quantity: number }) => {
    try {
        await axios.post("/cart/add-to-cart", { productID, quantity });
        toast.success("Đã thêm sản phẩm vào giỏ hàng");
    } catch (error: any) {
        toast.error(error.message);
        console.log(error);
    }
}

export const getCartByUserID = async () => {
    try {
        const { data } = await axios.get("/cart/user");
        return data
    } catch (error: any) {
        // toast.error("Bạn chưa có đơn hàng nào!");
        console.log(error);
    }
}

export const incrementQuantity = async ({ productID }: { productID: string, quantity?: number }) => {
    try {
        const bodyRequest = {
            productID: productID,
        }
        const { data } = await axios.put('/cart/increment', bodyRequest);
        return data
    } catch (error) {
        toast.error("Không thể thay đổi số lượng, vui lòng thử lại!");
        console.log(error);
    }
}

export const decrementQuantity = async ({ productID }: { productID: string, quantity?: number }) => {
    try {
        await axios.put("/cart/decrement", { productID });
    } catch (error) {
        toast.error("Không thể thay đổi số lượng, vui lòng thử lại!");
        console.log(error);
    }
}

export const updateQuantityCartByProductID = async ({ productID, quantity }: { productID: string, quantity: number }) => {
    try {
        await axios.put("/cart/update-cart", { productID, quantity });
    } catch (error) {
        toast.warning("Không thể cập nhật số lượng giỏ hàng, vui lòng thử lại!");
        console.log(error);
    }
}

export const removeCartByUserID = async ({ productID }: { productID: string }) => {
    try {
        await axios.put("/cart/delete-to-cart", { productID });
    } catch (error) {
        toast.error("Xóa sản phẩm trong giỏ hàng thất bại, vui lòng thử lại!");
        console.log(error);
    }
}