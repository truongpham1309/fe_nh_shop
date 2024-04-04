import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartQuery, useUpdateQuantity } from "../../../hooks/useCart";
import ServiceHome from "../home/ServiceHome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSessionStorage } from "../../../hooks/useLocal";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Loading from "../Loading";
import CartEmpty from "./CartEmpty";
import { TCart } from "../../../types/cart";

const CartComponent = () => {

    const { data, isLoading, isError } = useCartQuery();
    const { mutate: deleteCart, isPending } = useUpdateQuantity({ type: "REMOVE" });
    const { mutate: increment } = useUpdateQuantity({ type: "INCREMENT" });
    const { mutate: decrement } = useUpdateQuantity({ type: "DECREMENT" });
    const [token] = useSessionStorage('token', "");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            Swal.fire({
                icon: 'warning',
                title: "Bạn chưa đăng nhập!",
                confirmButtonText: 'Đăng nhập',
                cancelButtonText: 'Hủy',
                showCancelButton: true
            }).then((result) => {
                if (result.isConfirmed) navigate('/login');
                else if (result.dismiss === Swal.DismissReason.cancel) {
                    navigate(-1);
                }
            })
        }
    }, [token, navigate]);

    if (isLoading) return <Loading />
    if (isError || data.items.length === 0) return <CartEmpty />
    return (
        <>
            <section className="gradient-custom">
                <div className="container">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - {data.items.length} items</h5>
                                </div>
                                <div className="card-body">
                                    {(data as TCart).items.map((item, index) => (
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
                                                <button
                                                    type="button"
                                                    className="btn btn-danger py-2 mb-2"
                                                    data-mdb-toggle="tooltip"
                                                    title="Move to the wish list"
                                                    disabled={isPending}
                                                    onClick={() => deleteCart({ productID: item.productID._id })}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                                {/* Data */}
                                            </div>
                                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 ">
                                                {/* Quantity */}
                                                <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                                                    <button
                                                        className="btn btn-primary px-3 me-2 h-10"
                                                        onClick={() => decrement({ productID: item.productID._id })}
                                                    >
                                                        <FontAwesomeIcon icon={faMinus} />
                                                    </button>
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
                                                    <button
                                                        className="btn btn-primary px-3 ms-2 h-10"
                                                        onClick={() => increment({ productID: item.productID._id })}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </button>
                                                </div>
                                                {/* Quantity */}
                                                {/* Price */}
                                                <p className="text-start text-md-center">
                                                    Total: <strong>${item.productID.price * item.quantity}</strong>
                                                </p>
                                                {/* Price */}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Single item */}
                                    <hr className="my-4" />
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p>
                                        <strong>Expected shipping delivery</strong>
                                    </p>
                                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Products
                                            <span>${(data.items as []).reduce((accumulator: number, currentValue: any) => accumulator + currentValue.productID.price * currentValue.quantity, 0)}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>Gratis</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p className="mb-0">(including VAT)</p>
                                                </strong>
                                            </div>
                                            <span>
                                                <strong>${(data.items as []).reduce((accumulator: number, currentValue: any) => accumulator + currentValue.productID.price * currentValue.quantity, 0)}</strong>
                                            </span>
                                        </li>
                                    </ul>
                                    <Link to={`/checkout`}>
                                        <button type="button" className="btn btn-primary btn-lg btn-block">
                                            Go to checkout
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceHome />
        </>
    )
}

export default CartComponent