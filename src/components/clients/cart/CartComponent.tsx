import ServiceHome from "../home/ServiceHome";
import "./../../../sass/cart.scss";

const CartComponent = () => {
    return (
        <>
            <section className="banner">
                <img
                    src="https://picsum.photos/id/10/1440/316"
                    alt=""
                    className="banner__img"
                />
                <div className="banner__content">
                    <h2 className="banner__content-title">Cart</h2>
                    <a className="banner__content-description" href="">
                        Home
                    </a>
                    <img src="./assets/icons/row.svg" className="banner__content-img" />
                    <span className="banner__content-text"> shop</span>
                </div>
            </section>
            {/*End .banner*/}
            <div className="cart">
                <div className="container cart__container">
                    <table className="cart-table">
                        <thead>
                            <tr className="cart-table__head">
                                <th className="cart-table__header">Product</th>
                                <th className="cart-table__header">Price</th>
                                <th className="cart-table__header">Quantity</th>
                                <th className="cart-table__header">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody className="cart-table__body">
                            <tr className="cart-table__row">
                                <td className="cart-table__data">
                                    <div className="cart-table__test">
                                        <img
                                            src="https://picsum.photos/536/354"
                                            alt="ảnh"
                                            className="cart-table__img"
                                        />
                                        <span className="cart-table__note">Asgaard sofa</span>
                                    </div>
                                </td>
                                <td className="cart-table__data cart-table__price">25.000.000đ</td>
                                <td className="cart-table__data cart-table__quantity">
                                    <button className="cart-table__quantityBtn">1</button>
                                </td>
                                <td className="cart-table__data">
                                    <div className="cart-table__total">
                                        <p>25.000.000đ</p>
                                        <button className="cart-table__deleteBtn">
                                            <img
                                                src="../assets/icons/delete.svg"
                                                className="cart-table__delete"
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="cart-totals">
                        <p className="cart-totals__name">Cart Totals</p>
                        <div className="cart-totals__subtotal">
                            <p>Subtotal</p>
                            <span>25.000.000đ</span>
                        </div>
                        <div className="cart-totals__total">
                            <p>Total</p>
                            <span>25.000.000đ</span>
                        </div>
                        <button className="cart-totals__checkOut">Check Out</button>
                    </div>
                </div>
            </div>
            <ServiceHome />
        </>
    )
}

export default CartComponent