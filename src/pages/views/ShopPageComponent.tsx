import ServiceHome from "../../components/clients/home/ServiceHome"
import BannerShopPageComponent from "../../components/clients/shop/BannerShopPageComponent"
import ProductsListComponent from "../../components/clients/shop/ProductsListComponent"
import "./../../sass/shop.scss"
const ShopPageComponent = () => {
  return (
    <>
        <BannerShopPageComponent />
        <ProductsListComponent />
        <ServiceHome />
    </>
  )
}

export default ShopPageComponent