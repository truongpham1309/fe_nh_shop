import { useEffect, useState } from "react";
import useProductQuery from "../../../hooks/useProduct";
import { TProduct } from "../../../types/products";
import Loading from "../Loading";
import ProductItemComponent from "./ProductItemComponent";

const ProductsListComponent = () => {
    const [page, setPage] = useState<number>(1);
    const { data, isLoading, isError, refetch } = useProductQuery({ page, limit: 12 });
    const newArray = Array.from({ length: data?.totalPage }, (_, index) => index + 1);
    useEffect(() => {
        refetch();
    }, [page])

    if (isLoading) return <Loading />;
    if (isError) return <div>Product Not Found</div>;
    return (
        <>
            <section className="news">
                <div className="container">
                    <div className="section-body">
                        <div className="product-list">
                            {(data.products)?.map((product: TProduct) => (
                                <ProductItemComponent product={product} key={product._id} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="pagination">
                {page >= newArray.length ? <button className="prev-btn" onClick={() => setPage(page - 1)}>Prev</button> : ""}
                <ul className="page-list">
                    {newArray.map((pageI) => (
                        <li key={pageI} style={pageI === page ? { background: "#B88E2F" } : {}} onClick={() => setPage(pageI)} className="page-item">
                            {pageI}
                        </li>
                    ))}
                </ul>
                {page < newArray.length ? <button className="next-btn" onClick={() => setPage(page + 1)}>Next</button> : ""}
            </section>
        </>
    )
}

export default ProductsListComponent