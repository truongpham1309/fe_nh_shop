export type TCart = {
    _id: string,
    userID: {
        _id: string,
        username: string,
        email: string,
    },
    items: [
        {
            productID: {
                _id: string;
                product_name: string;
                price: number;
                tags: string[];
                feature: boolean;
                gallery: string[];
                countStocks: number;
                image: string;
                description: string;
                category: string;
            },
            quantity: number
        }
    ],
}