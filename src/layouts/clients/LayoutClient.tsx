import { Outlet } from "react-router-dom"
import "./../../style.scss"
import FooterClient from "./FooterClient"
import HeaderClient from "./HeaderClient"
import { ToastContainer } from "react-toastify"


const LayoutClient = () => {
    return (
        <>
            <HeaderClient />
            <Outlet />
            <ToastContainer />
            <FooterClient />
        </>
    )
}

export default LayoutClient