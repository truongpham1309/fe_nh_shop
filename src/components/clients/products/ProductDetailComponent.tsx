const ProductDetailComponent = () => {
    return (
        <>
            <section className="deltail-product">
                <div className="container">
                    <div className="detail-product-list">
                        <div className="detail-product-img">
                            <div className="detail-product-img1">
                                <img src="./assets/img/Mask group1.png" alt="" />
                                <img src="./assets/img/Group 982.png" alt="" />
                                <img src="./assets/img/Group 973.png" alt="" />
                                <img src="./assets/img/Group 964.png" alt="" />
                            </div>
                            <div className="detail-product-img2">
                                <img src="./assets/img/Group 955.png" alt="" />
                            </div>
                        </div>
                        <div className="detail-product-item">
                            <div className="detail-product-heading">
                                <div className="detail-title">
                                    <h2>Asgaard sofa</h2>
                                </div>
                                <div className="detail-price">
                                    <h3>25.000.000đ</h3>
                                </div>
                                <div className="detail-evaluate">
                                    <img src="./assets/img/star.png" alt="" />
                                    <img src="./assets/img/star.png" alt="" />
                                    <img src="./assets/img/star.png" alt="" />
                                    <img src="./assets/img/star.png" alt="" />
                                    <img src="./assets/img/star_half.png" alt="" />
                                    <span className="custom-review">5 Customer Review</span>
                                </div>
                                <div className="detail-reviews">
                                    <p className="text-review">
                                        Setting the bar as one of the loudest speakers in its class, the
                                        Kilburn is a compact, stout-hearted hero with a well-balanced
                                        audio which boasts a clear midrange and extended highs for a
                                        sound.
                                    </p>
                                </div>
                                <div className="detail-size">
                                    <h4 className="text-size">Size</h4>
                                    <div className="size">
                                        <button className="size-l">L</button>
                                        <button className="size-m">M</button>
                                        <button className="size-s">S</button>
                                    </div>
                                </div>
                                <div className="detail-color">
                                    <h4 className="text-size">Color</h4>
                                    <div className="color">
                                        <div className="color-purple">
                                            <img src="./assets/img/Rectangle 421.png" alt="" />
                                        </div>
                                        <div className="color-black">
                                            <img src="./assets/img/Rectangle 432.png" alt="" />
                                        </div>
                                        <div className="color-brown">
                                            <img src="./assets/img/Rectangle 443.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-listtocart">
                                    <button className="slots">
                                        <span className="remove">-</span>
                                        <span className="slot">1</span>
                                        <span className="add">+</span>
                                    </button>
                                    <button className="detail-addtocarts">Add To Cart</button>
                                    <button className="detail-compare">Compare</button>
                                </div>
                            </div>
                            <hr className="line-pruduct" />
                            <div className="detail-product-body">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>SKU</th>
                                            <td>:</td>
                                            <td className="itemss">SS001</td>
                                        </tr>
                                        <tr>
                                            <th>Category</th>
                                            <td>:</td>
                                            <td className="itemss">Sofas</td>
                                        </tr>
                                        <tr>
                                            <th>Tags</th>
                                            <td>:</td>
                                            <td className="itemss">Sofa, Chair, Home, Shop</td>
                                        </tr>
                                        <tr>
                                            <th>Share</th>
                                            <td>:</td>
                                            <td className="icon">
                                                <i className="fa-brands fa-facebook" />
                                                <i className="fa-brands fa-twitter" />
                                                <i className="fa-brands fa-linkedin" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetailComponent