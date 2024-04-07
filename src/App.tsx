import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/ReactToastify.css";
import CartComponent from "./components/clients/cart/CartComponent";
import CheckOutComponent from "./components/clients/checkout/CheckOutComponent";
import LoginComponent from "./components/clients/login/LoginComponent";
import RegisterComponent from "./components/clients/login/RegisterComponent";
import { configUseAxios } from "./configs/axios";
import { useSessionStorage } from "./hooks/useLocal";
import AdminLayout from "./layouts/admin/AdminLayout";
import LayoutClient from "./layouts/clients/LayoutClient";
import OrderDashBoardAdmin from "./pages/admin/order/OrderDashBoardAdmin";
import OrderDetailsAdmin from "./pages/admin/order/OrderDetailsAdmin";
import ProductEditAdmin from "./pages/admin/products/ProductEditAdmin";
import ProductsCreateAdmin from "./pages/admin/products/ProductsCreateAdmin";
import ProductsDashBoard from "./pages/admin/products/ProductsDashBoard";
import HomePage from "./pages/views/HomePage";
import ProductDetailPage from "./pages/views/ProductDetailPage";
import ShopPageComponent from "./pages/views/ShopPageComponent";
import OrderList from "./pages/views/order/OrderList";
import OrderDetail from "./pages/views/orderDetail/OrderDetail";
import CategoriesDashBoard from "./pages/admin/categories/CategoriesDashBoard";
import CategoryCreateAdmin from "./pages/admin/categories/CategoryCreateAdmin";
import CategoryEditAdmin from "./pages/admin/categories/CategoryEditAdmin";


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

          <Route path="admin" element={<AdminLayout />} >
            <Route index element={<ProductsDashBoard />} />
            <Route path="/admin/product/add" element={<ProductsCreateAdmin />} />
            <Route path="/admin/products/edit/:id" element={<ProductEditAdmin />} />

            <Route path="/admin/orders" element={<OrderDashBoardAdmin />} />
            <Route path="/admin/orders/detail/:id" element={<OrderDetailsAdmin />} />

            <Route path="/admin/categories" element={<CategoriesDashBoard />} />
            <Route path="/admin/categories/add" element={<CategoryCreateAdmin />} />
            <Route path="/admin/categories/edit/:id" element={<CategoryEditAdmin />} />

          </Route>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App