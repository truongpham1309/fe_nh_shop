import { useEffect, useState } from "react"
import { getAllProducts } from "../services/productsService";


export const useGetTotalPageProduct = () => {
    const [totalPage, setTotalPage] = useState<number[]>([]);

    useEffect(() => {
        (async () => {
            const products = await getAllProducts();
            const totalPages = Math.ceil(products.length / 12);
            const newArray = Array.from({ length: totalPages }, (_, index) => index + 1)
            setTotalPage(newArray)
        })()
    }, [])
    return { totalPage }


}