import ServiceHome from "../../components/clients/home/ServiceHome"
import BannerShopPageComponent from "../../components/clients/shop/BannerShopPageComponent"
import PaginationComponent from "../../components/clients/shop/PaginationComponent"
import ProductsListComponent from "../../components/clients/shop/ProductsListComponent"
import "./../../sass/shop.scss"
const ShopPageComponent = () => {
  return (
    <>
        <BannerShopPageComponent />
        <ProductsListComponent />
        <PaginationComponent />
        <ServiceHome />
    </>
  )
}

export default ShopPageComponent