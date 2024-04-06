import { Button, Spin, Table, TableProps } from "antd";
import useProductQuery, { useProductMutation } from "../../../hooks/useProduct";
import { TProduct } from "../../../types/products";
import { Link } from "react-router-dom";

type TTableProduct = {
  _id: string;
  product_name: string;
  price: number;
  category: {
    category_name: string
  };
  featured: boolean;
  image: string;
}

const ProductsDashBoard = () => {
  const { data, isLoading, isError } = useProductQuery({ id: "" });
  const { mutate: removeProduct } = useProductMutation({ type: "REMOVE" });
  const colums: TableProps<TTableProduct>['columns'] = [
    {
      title: '#',
      dataIndex: 'index',
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      key: "product_name",
      dataIndex: "product_name",
    },
    {
      title: 'Price',
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Category",
      key: "category",
      dataIndex: ['category', 'category_name'],
    },
    {
      title: "Image",
      key: "image",
      dataIndex: "image",
      render: (image) => <img className="w-[30%] h-20" src={image} alt={image} />
    },
    {
      title: "Feature",
      key: "feature",
      dataIndex: "feature",
      render: (feature) => feature ? 'Yes' : 'No',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <span>
          <Link to={`/admin/products/edit/${record._id}`}><Button className="btn-primary mr-3 text-white">Edit</Button></Link>
          <Button className="btn-danger" onClick={() => removeProduct((record as any))}>Delete</Button>
        </span>
      ),
    },
  ]
  if (isLoading) return <div className="d-flex justify-content-center align-items-center vh-100"><Spin /></div>;
  if (isError) return <>Product not Found</>
  return (
    <>
      <div className="text-right"><Link to={'/admin/product/add'}><button className="btn btn-success h-10 my-3">Add New Product</button></Link></div>
      <Table columns={colums} dataSource={data.products} rowKey={record => record._id} pagination={{ defaultPageSize: 6 }} />
    </>
  )
}

export default ProductsDashBoard