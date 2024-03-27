const ProductItemComponent = () => {
    return (
        <>
            <div className="product-item">
                <div className="product-image">
                    <img
                        src="https://picsum.photos/id/10/300/300"
                        alt=""
                        className="product__thumbnail"
                    />
                    <span className="product-sale">30%</span>
                </div>
                <div className="product-info">
                    <h3 className="product__name">
                        <a href="" className="product__link">
                            Syltherine
                        </a>
                    </h3>
                    <a href="" className="product__category">
                        Stylish cafe chair
                    </a>
                    <div className="product-price">
                        <span className="product-price__new">$200</span>
                        <span className="product-price__old">$300</span>
                    </div>
                </div>
                <div className="product-actions">
                    <button className="btn product-action__quickview">Quick View</button>
                    <button className="btn product-action__addtocart">Add To Cart</button>
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