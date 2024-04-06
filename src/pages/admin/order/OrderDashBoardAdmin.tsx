import { Button, Table, TableProps } from "antd"
import { TOrder } from "../../../types/order"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getAllOrderByAdmin } from "../../../services/orderService"
import ButtonUpdateOrderStatus from "../../../components/ui/ButtonUpdateOrderStatus"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import ButtonShowStatusOrder from "../../../components/ui/ButtonShowStatusOrder"

const OrderDashBoardAdmin = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['ORDER_ADMIN'],
        queryFn: async () => {
            return await getAllOrderByAdmin();
        }
    })

    const colums: TableProps<TOrder>['columns'] = [
        {
            title: '#',
            dataIndex: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Customer Name',
            key: "userID",
            dataIndex: ["userID", 'username'],

        },
        {
            title: "Address",
            key: "address",
            dataIndex: "address",
        },

        {
            title: "Payment Method",
            key: "paymentType",
            dataIndex: "paymentType",
        },
        {
            title: "Phone",
            key: "numberPhone",
            dataIndex: "numberPhone",
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
            render: (status) => <ButtonShowStatusOrder status={status} />
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <>
                    <Link to={`/admin/orders/detail/${record._id}`}><Button className="mr-3"><FontAwesomeIcon icon={faInfo} /></Button></Link>
                    {record.status === "cancelled" || record.status === "delivered" ? "" : <ButtonUpdateOrderStatus key={record._id} order={record}/>}
                </>

            ),
        },
    ]
    
    return (
        <Table columns={colums} dataSource={data} rowKey={record => record._id} pagination={{ defaultPageSize: 6 }} />
    )
}

export default OrderDashBoardAdmin