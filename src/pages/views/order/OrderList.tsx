import { Link } from "react-router-dom";
import Loading from "../../../components/clients/Loading";
import CartEmpty from "../../../components/clients/cart/CartEmpty";
import { useOrderMutation, useQueryOrder } from "../../../hooks/useOrder";
import { TOrder } from "../../../types/order";
import { convertToShortDateFormat } from "../../../utils/convertDateFomat";
import "./../../../css/order-list.css";
import Swal from "sweetalert2";

const OrderList = () => {
    const { data, isError, isLoading } = useQueryOrder({ _id: "" });
    const { mutation } = useOrderMutation({ type: "CANCEL" });
    const { mutation: orderUpdate } = useOrderMutation({ type: "UPDATE" });

    if (isLoading) return <Loading />
    if (isError || data.length === 0) return <CartEmpty />

    const handleUpdateStatusOrder = (item: TOrder) => {
        Swal.fire({
            icon: "question",
            title: "Bạn đã nhận được hàng?",
            confirmButtonText: "Đã nhận",
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                orderUpdate.mutate(item);
            }
        })
    }
    return (
        <div className="container mt-5">
            <table className="table table-borderless main">
                <thead>
                    <tr className="head">
                        <th scope="col">#</th>
                        <th scope="col">Created</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Fullfillment</th>
                        <th scope="col">Total</th>
                        <th scope="col">Status</th>
                        <th scope="col">Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {(data as TOrder[])?.map((item, index) => (

                        <tr key={index} className="rounded bg-white">

                            <td className="order-color">{index + 1}</td>
                            <td>{convertToShortDateFormat(item.createdAt)}</td>
                            <td className="d-flex align-items-center">
                                <Link to={`/order/detail/${item._id}`}>
                                    <span className="ml-2">{item.userID.username}</span>
                                </Link>
                            </td>
                            <td>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-warning btn-sm "
                                    >
                                        Unfullfilled
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Fullfilled
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Unfullfilled
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Hold
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td>${item.totalPrice}</td>
                            <td>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-primary btn-sm "
                                        type="button"
                                        hidden={item.status !== 'confirm'}
                                    >
                                        Confirm
                                    </button>
                                    <button
                                        className="btn btn-secondary btn-sm "
                                        type="button"
                                        hidden={item.status !== 'pendding'}
                                    >
                                        Pendding
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm "
                                        type="button"
                                        hidden={item.status !== 'cancelled'}
                                    >
                                        Canceled
                                    </button>
                                    <button
                                        className="btn btn-info btn-sm "
                                        type="button"
                                        hidden={item.status !== 'shipped'}
                                    >
                                        Shipped
                                    </button>
                                    <button
                                        className="btn btn-success btn-sm "
                                        type="button"
                                        hidden={item.status !== 'delivered'}
                                    >
                                        Delivered
                                    </button>
                                </div>
                            </td>
                            <td>
                                {item.status === "pendding" ?
                                    <button className="btn btn-danger" onClick={() => mutation.mutate(item)}>
                                        Cancel
                                    </button> :
                                    (item.status === "shipped" &&
                                        <button onClick={() => handleUpdateStatusOrder(item)} className="btn btn-primary">
                                            Receive
                                        </button>)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrderList