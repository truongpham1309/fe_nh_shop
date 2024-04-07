import { Link } from "react-router-dom";
import "./../../../css/cart-empty.css"

const CartEmpty = () => {
    return (
        <div className="">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="font-bold text-3xl text-center">Cart</h5>
                        </div>
                        <div className="card-body cart">
                            <div className="col-sm-12 empty-cart-cls text-center">
                                <div className="d-flex justify-center">
                                    <img
                                        src="https://i.imgur.com/dCdflKN.png"
                                        width={130}
                                        height={130}
                                        className="img-fluid  mb-4 mr-3"
                                    />
                                </div>
                                <h3>
                                    <strong>Your Cart is Empty</strong>
                                </h3>
                                <h4>Add something to make me happy :)</h4>
                                <Link
                                    to="/products"
                                    className="btn btn-primary cart-btn-transform py-2 m-3"
                                    data-abc="true"
                                >
                                    Continue shopping
                                </Link>

                                <Link
                                    to="/order"
                                    className="btn btn-primary cart-btn-transform py-2 m-3"
                                    data-abc="true"
                                >
                                    Continue order
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartEmpty