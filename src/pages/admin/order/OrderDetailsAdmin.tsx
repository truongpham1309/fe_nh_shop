import { Table, TableProps } from 'antd';
import { TProduct } from '../../../types/products';
import { useQueryOrder } from '../../../hooks/useOrder';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/clients/Loading';

type TTableProps = {
    _id: string;
    productID: TProduct,
    quantity: number
}
const OrderDetailsAdmin = () => {
  const { id } = useParams();
  const { data, isLoading } = useQueryOrder({ _id: id });
  const colums: TableProps<TTableProps>['columns'] = [
    {
      title: "#",
      dataIndex: "index",
      render: (text, record, index) => index + 1,
      align: "center"
    },
    {
      title: "Product",
      key: "product_name",
      dataIndex: ['productID', "product_name"],
    },
    {
      title: "Image",
      key: "image",
      align: "center",
      render: (product) => <><img src={product.productID.image} className='w-100 object-contain h-20' alt={product.productID.image} /></>
    },
    {
      title: "Quantity",
      key: "quantity",
      align: "center",
      dataIndex: 'quantity',
    }
  ]
  if (isLoading) return <Loading />;
  return (
    <>
      <Table dataSource={data.cartID.items} columns={colums} rowKey={record => record.productID._id} pagination={false} />
      <div className='d-flex justify-start pl-20 py-5'>
        <div>
          <strong className='text-[#333] font-bold'>Total: ${data.totalPrice}</strong>
        </div>
      </div>
    </>
  )
}

export default OrderDetailsAdmin