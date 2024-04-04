import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutClient from "./layouts/clients/LayoutClient";
import HomePage from "./pages/views/HomePage";
import ShopPageComponent from "./pages/views/ShopPageComponent";
import ProductDetailPage from "./pages/views/ProductDetailPage";
import CartComponent from "./components/clients/cart/CartComponent";
import CheckOutComponent from "./components/clients/checkout/CheckOutComponent";
import LoginComponent from "./components/clients/login/LoginComponent";
import { configUseAxios } from "./configs/axios";
import "react-toastify/ReactToastify.css"
import RegisterComponent from "./components/clients/login/RegisterComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import OrderList from "./pages/views/order/OrderList";
import OrderDetail from "./pages/views/orderDetail/OrderDetail";


configUseAxios();

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutClient />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ShopPageComponent />} />
            <Route path="products/:id/detail" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartComponent />} />
            <Route path="/checkout" element={<CheckOutComponent />} />
            <Route path="/order" element={<OrderList />} />
            <Route path="/order/detail/:id" element={<OrderDetail />} />
          </Route>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App