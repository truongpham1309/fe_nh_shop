import { Button } from "antd"

const ButtonShowStatusOrder = ({ status }: { status: "canclled" | "pendding" | "confirm" | "shipped" | "delevered" }) => {
    switch (status) {
        case "canclled": return <Button disabled className="btn-danger btn-sm " >Canceled</Button>
        case "pendding": return <Button disabled className="btn-secondary btn-sm " >Pendding</Button>
        case "confirm": return <Button disabled className="btn-primary btn-sm " >Confirm</Button>
        case "shipped": return <Button disabled className="btn-info btn-sm" >Shipped</Button>
        case "delevered": return <Button disabled className="btn-success btn-sm" >Delevered</Button>
        default: return <Button disabled className="btn-secondary btn-sm" >Pendding</Button>
    }
}
export default ButtonShowStatusOrder