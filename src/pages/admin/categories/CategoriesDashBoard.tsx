import { faEdit, faInfo, faRemove, faTrain, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table, TableProps } from "antd"
import { Link } from "react-router-dom";
import { useCategoryMutation, useCategoryQuery } from "../../../hooks/useCategoryQuery";
import Loading from "../../../components/clients/Loading";
import Swal from "sweetalert2";

type TTableProps = {
    _id: string;
    category_name: string;
    products: string[],
}

const CategoriesDashBoard = () => {
    const { data, isLoading, isError } = useCategoryQuery();
    const { mutate: handleRemove } = useCategoryMutation({ type: "REMOVE" });

    const handleConfirmRemove = async (category: any) => {
        const resutl = await Swal.fire({
            title: "Bạn có chắc chắn muốn xóa danh mục này?",
            icon: "question",
            confirmButtonText: "OK",
            showCancelButton: true,
        });
        if (resutl.isConfirmed) {
            handleRemove(category);
        }
        return;
    }
    const columns: TableProps<TTableProps>['columns'] = [
        {
            title: "#",
            key: "index",
            render: (text, record, index) => index + 1,
        },
        {
            title: "Name",
            key: "category_name",
            dataIndex: "category_name",
        },
        {
            title: "Total Product",
            key: "total_products",
            render: (text, record, total) => record.products.length
        },
        {
            title: "Infomation",
            key: "infomation",
            render: (record) => <>
                <Link to={`/admin/categories/detail/products/${record._id}`}><Button className="mr-3"><FontAwesomeIcon icon={faInfo} /></Button></Link>
                <Link to={`/admin/categories/edit/${record._id}`}><Button><FontAwesomeIcon icon={faEdit} /></Button></Link>
            </>
        },
        {
            title: "Delete",
            key: "delete",
            render: (record) => <>
                <Button className="btn btn-danger" onClick={() => handleConfirmRemove(record)}><FontAwesomeIcon icon={faTrash} /></Button>
            </>
        }
    ];
    if (isLoading) return <Loading />
    return (
        <>
            <div className="text-right"><Link to={'/admin/categories/add'}><button className="btn btn-success h-10 my-3">Add New Categories</button></Link></div>
            <Table dataSource={data} columns={columns} rowKey={record => record._id} pagination={{ defaultPageSize: 5 }} />
        </>
    )
}

export default CategoriesDashBoard