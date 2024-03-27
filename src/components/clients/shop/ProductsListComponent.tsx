import { useQuery } from "@tanstack/react-query";
import useProductQuery from "../../../hooks/useProductQuery";
import { TProduct } from "../../../types/products";
import axios from "axios";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/productsService";

const ProductsListComponent = () => {
    // const { data: products } = useProductQuery();

    const { data } = useQuery({
        queryKey: ['PRODUCT_ID'],
        queryFn: async () => {
            try {
                const { data } = await axios.get('http://localhost:8000/api/products');
                console.log(data);
                return data
            } catch (error) {
                console.log(error);
            }

        }
    })

    // useEffect(() => {
    //     console.log(data);
    // }, [])

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getAllProducts();
            setProducts(data);
        })()
    }, [])
    return (
        <>
            <section className="news">
                <div className="container">
                    <div className="section-body">
                        <div className="product-list">
                            {data.map((product: TProduct) => (
                                <div key={product._id} className="product-item">
                                    <div className="product-image">
                                        <img
                                            src={product.image}
                                            alt=""
                                            className="product__thumbnail"
                                        />
                                        <span className="product-sale"></span>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product__name">
                                            <a href={`product/${product._id}/detail`} className="product__link">
                                                {product.product_name}
                                            </a>
                                        </h3>
                                        <a href="" className="product__category">
                                            {product.category.category_name}
                                        </a>
                                        <div className="product-price">
                                            <span className="product-price__new">$200</span>
                                            <span className="product-price__old">$ {product.price}</span>
                                        </div>
                                    </div>
                                    <div className="product-actions">
                                        <button className="btn product-action__quickview">
                                            Quick View
                                        </button>
                                        <button className="btn product-action__addtocart">
                                            Add To Cart
                                        </button>
                                        <div className="product-actions-more">
                                            <span className="product-action__share">Share</span>
                                            <span className="product-action__compare">Compare</span>
                                            <span className="product-action__like">Like</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProductsListComponent