import { Link, useParams } from "react-router-dom"
import "./../../../css/order-detail.css"
import { useQueryOrder } from "../../../hooks/useOrder";
import { TOrder } from "../../../types/order";
import Loading from "../../../components/clients/Loading";

const OrderDetail = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useQueryOrder({ _id: id });

    if (isLoading) return <Loading />
    if (isError) return <h2 className="font-bold text-center py-5">Đơn hàng không tồn tại!</h2>
    return (
        <div className="col-md-8 mx-auto" >
            <div className="card mb-4">
                <div className="card-header py-3">
                    <h5 className="mb-0">Order Deitail - {data.cartID.items.length} items</h5>
                </div>
                <div className="card-body">
                    {(data as TOrder).cartID.items.map((item, index) => (
                        <div className="row" key={index}>
                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                {/* Image */}
                                <div
                                    className="bg-image hover-overlay hover-zoom ripple rounded"
                                    data-mdb-ripple-color="light"
                                >
                                    <img
                                        src={item.productID.image}
                                        className="w-100"
                                        alt={item.productID.product_name}
                                    />
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                                    />
                                </div>
                                {/* Image */}
                            </div>
                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                {/* Data */}
                                <Link to={`/products/${item.productID._id}/detail`}>
                                    <p>
                                        <strong>{item.productID.product_name}</strong>
                                    </p>
                                </Link>
                                {/* Data */}
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 ">
                                {/* Quantity */}
                                <div className="d-flex" style={{ maxWidth: 300 }}>

                                    <div className="form-outline">
                                        <input
                                            id="form1"
                                            min={0}
                                            name="quantity"
                                            value={item.quantity}
                                            readOnly
                                            type="number"
                                            className="form-control"
                                        />
                                        <label className="form-label" htmlFor="form1">
                                            Quantity
                                        </label>
                                    </div>

                                </div>
                                <p className="text-start text-md-center">
                                    Price: <strong>${item.productID.price * item.quantity}</strong>
                                </p>
                                {/* Price */}
                            </div>
                        </div>
                    ))}

                    {/* Single item */}
                    <hr className="my-4" />
                </div>
            </div>
            <div className="card d-flex justify-content-between">
                <div className="card-body">
                    <p>
                        <strong>Total Price: ${(data.cartID.items as []).reduce((accumulator: number, currentValue: any) => accumulator + currentValue.productID.price * currentValue.quantity, 0) + 8}</strong>
                    </p>

                </div>
            </div>
        </div>

    )
}

export default OrderDetail