import ProductDetailComponent from "../../components/clients/products/ProductDetailComponent"
import ProductInfomationComponent from "../../components/clients/products/ProductInfomationComponent"
import ProductsRelatedComponent from "../../components/clients/products/ProductsRelatedComponent"
import "./../../sass/detail.scss"

const ProductDetailPage = () => {
  return (
    <>
        <ProductDetailComponent />
        <ProductInfomationComponent />
        <ProductsRelatedComponent />
    </>
  )
}

export default ProductDetailPage