import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartQuery } from "../../../hooks/useCart";
import ServiceHome from "../home/ServiceHome";
import BannerHome from './../home/BannerHome';
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSessionStorage } from "../../../hooks/useLocal";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Loading from "../Loading";
import CartEmpty from "./CartEmpty";
// import "./../../../sass/cart.scss";

const CartComponent = () => {

    const { data, isLoading, isError } = useCartQuery();
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

    if(isLoading) return <Loading />

    if(isError || data.length === 0) return <CartEmpty />


    return (
        <>
            <BannerHome />
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - 2 items</h5>
                                </div>
                                <div className="card-body">
                                    {/* Single item */}
                                    <div className="row">
                                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                            {/* Image */}
                                            <div
                                                className="bg-image hover-overlay hover-zoom ripple rounded"
                                                data-mdb-ripple-color="light"
                                            >
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                                                    className="w-100"
                                                    alt="Blue Jeans Jacket"
                                                />
                                                <a href="#!">
                                                    <div
                                                        className="mask"
                                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                                                    />
                                                </a>
                                            </div>
                                            {/* Image */}
                                        </div>
                                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                            {/* Data */}
                                            <p>
                                                <strong>Blue denim shirt</strong>
                                            </p>
                                            <p>Color: blue</p>
                                            <p>Size: M</p>

                                            <button
                                                type="button"
                                                className="btn btn-danger py-2 mb-2"
                                                data-mdb-toggle="tooltip"
                                                title="Move to the wish list"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                            {/* Data */}
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                            {/* Quantity */}
                                            <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                                                <button
                                                    className="btn btn-primary px-3 me-2"
                                                >
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </button>
                                                <div className="form-outline">
                                                    <input
                                                        id="form1"
                                                        min={0}
                                                        name="quantity"
                                                        defaultValue={1}
                                                        type="number"
                                                        className="form-control"
                                                    />
                                                    <label className="form-label" htmlFor="form1">
                                                        Quantity
                                                    </label>
                                                </div>
                                                <button
                                                    className="btn btn-primary px-3 ms-2"
                                                >
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </button>
                                            </div>
                                            {/* Quantity */}
                                            {/* Price */}
                                            <p className="text-start text-md-center">
                                                <strong>$17.99</strong>
                                            </p>
                                            {/* Price */}
                                        </div>
                                    </div>
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
                                            <span>$53.98</span>
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
                                                <strong>$53.98</strong>
                                            </span>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn btn-primary btn-lg btn-block">
                                        Go to checkout
                                    </button>
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