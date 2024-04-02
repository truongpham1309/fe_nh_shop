import { useQuery } from "@tanstack/react-query"
import { Link, useNavigate } from "react-router-dom"
import { getAllProductsByCategory } from "../../../services/productsService"
import { TProduct } from "../../../types/products"
import Loading from "../Loading"
import ProductItemComponent from "../shop/ProductItemComponent"

type ProductsRelatedComponentProps = {
    idCate: string
}

const ProductsRelatedComponent = ({ idCate }: ProductsRelatedComponentProps) => {
    const navigate = useNavigate();

    const { data: productRelated, isLoading, isError } = useQuery({
        queryKey: ['PRODUCT_RELATED', idCate],
        queryFn: async () => await getAllProductsByCategory({ id: idCate, limit: 4 })
    })
    if (isLoading) return <Loading />
    if (isError) navigate("/products");
    return (
        <>
            <hr className="title-line" />
            <section className="news">
                <div className="container">
                    <div style={{
                        textAlign: "center",
                        margin: "0 auto"
                    }} className="section-heading">
                        <h2 style={{
                            textAlign: "center",
                            margin: "0 auto"
                        }} className="section-heading__title">Related Products</h2>
                    </div>
                    <div className="section-body">
                        <div className="product-list">
                            {(productRelated as TProduct[]).map((product) => (
                                <ProductItemComponent product={product} key={product._id} />
                            ))}
                        </div>
                        <div className="relate-product-showmore">
                            <Link to={"/products"}><button className="btn-showmore">Show More</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsRelatedComponent