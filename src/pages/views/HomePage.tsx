import BannerHome from "../../components/clients/home/BannerHome"
import BlogHome from "../../components/clients/home/BlogHome"
import ProductsHome from "../../components/clients/home/ProductsHome"
import ServiceHome from "../../components/clients/home/ServiceHome"
import ShopHome from "../../components/clients/home/ShopHome"

const HomePage = () => {
  return (
    <>
        <BannerHome />
        <ProductsHome />
        <ShopHome />
        <BlogHome />
        <ServiceHome />
    </>
  )
}

export default HomePage