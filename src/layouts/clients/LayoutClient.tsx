import { Outlet } from "react-router-dom"
import "./../../style.scss"
import FooterClient from "./FooterClient"
import HeaderClient from "./HeaderClient"

const LayoutClient = () => {
    return (
        <>
            <HeaderClient />
            <Outlet />
            <FooterClient />
        </>
    )
}

export default LayoutClient