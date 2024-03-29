import { Link } from "react-router-dom"
import useProductQuery from "../../../hooks/useProductQuery"
import Loading from "../Loading";
import ProductItemComponent from "../shop/ProductItemComponent";
import { TProduct } from "../../../types/products";

const ProductsHome = () => {
    const { data: products, isLoading, isError } = useProductQuery({ page: 1, limit: 4 });
    if (isLoading) return <Loading />;
    if (isError) return <>Not Found</>
    return (
        <>
            <>
                <section className="news">
                    <div className="container">
                        <div className="section-heading">
                            <h2 className="section-heading__title">New</h2>
                        </div>
                        <div className="section-body">
                            <div className="product-list">
                                {(products as TProduct[]).map(product => (
                                    <ProductItemComponent product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <div style={{ marginBottom: 50 }} className="relate-product-showmore">
                    <Link to={'/products'}><button className="btn-showmore">Show More</button></Link>
                </div>
                <div className="container">
                    <hr />
                </div>
            </>


        </>
    )
}

export default ProductsHome