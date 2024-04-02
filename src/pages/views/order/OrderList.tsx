import Loading from "../../../components/clients/Loading";
import CartComponent from "../../../components/clients/cart/CartComponent";
import CartEmpty from "../../../components/clients/cart/CartEmpty";
import { useQueryOrder } from "../../../hooks/useOrder";
import { TOrder } from "../../../types/order";
import "./../../../css/order-list.css";

const OrderList = () => {
    const { data, isError, isLoading } = useQueryOrder();

    if (isLoading) return <Loading />
    if (isError || data.length === 0) return <CartEmpty />
    return (
        <div className="container mt-5">
            <table className="table table-borderless main">
                <thead>
                    <tr className="head">
                        <th scope="col">Order ID</th>
                        <th scope="col">Created</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Fullfillment</th>
                        <th scope="col">Total</th>
                        <th scope="col">Status</th>
                        <th scope="col">Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {(data as TOrder[])?.map((item, index) => (
                        <tr key={index} className="rounded bg-white">
                            
                            <td className="order-color">{index + 1}</td>
                            <td>Mar 21</td>
                            <td className="d-flex align-items-center">
                                <span className="ml-2">{item.userID.username}</span>
                            </td>
                            <td>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-warning btn-sm dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
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
                                        className="btn btn-primary btn-sm dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Delevery
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Yes
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                No
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td>Today</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default OrderList