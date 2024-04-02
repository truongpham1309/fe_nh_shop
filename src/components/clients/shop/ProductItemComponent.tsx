import { Link } from "react-router-dom"
import { TProduct } from "../../../types/products"
import { useAddToCart } from "../../../hooks/useCart"

const ProductItemComponent = ({ product }: { product: TProduct }) => {

    const { mutate, isPending } = useAddToCart();
    return (
        <>
            <div className="product-item">
                <div className="product-image">
                    <img
                        src={product.image}
                        alt=""
                        className="product__thumbnail"
                    />
                    <span className="product-sale">10%</span>
                </div>
                <div className="product-info">
                    <h3 className="product__name">
                        <a href={`/products/${product._id}/detail`} className="product__link">
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
                    <Link to={`/products/${product._id}/detail`}>
                        <button className="btn product-action__quickview bg-white">
                            Quick View
                        </button>
                    </Link>
                        <button style={{ height: 50 }} onClick={() => mutate({productID: product._id, quantity: 1})} className="btn product-action__addtocart bg-white">
                            Add To Cart
                        </button>
                    <div className="product-actions-more">
                        <span className="product-action__share">Share</span>
                        <span className="product-action__compare">Compare</span>
                        <span className="product-action__like">Like</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItemComponent