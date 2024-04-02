export type TProduct = {
    _id: string,
    product_name: string,
    price: number,
    feature: boolean,
    image: string,
    gallery: string[],
    category: {
        category_name: string,
        image: string,
        _id: string,
    },
    countStocks: number,
    description: string,
    tags: string[],
}