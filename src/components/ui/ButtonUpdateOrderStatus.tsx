import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "antd"
import Swal from "sweetalert2"
import { useUpdateStatusOrderByAdmin } from "../../hooks/useOrder"
import { TOrder } from "../../types/order"

const ButtonUpdateOrderStatus = ({ order }: { order: TOrder }) => {
    const { mutate, isPending } = useUpdateStatusOrderByAdmin();
    const handleUpdateStatusOrder = async () => {
        const result = await Swal.fire({
            icon: "question",
            title: "Update Status Order?",
            confirmButtonText: "Update",
            showCancelButton: true,
        })
        if (result.isConfirmed) {
            mutate(order);
        }
    }
    return (
        <Button className="btn-primary" disabled={isPending} onClick={handleUpdateStatusOrder}><FontAwesomeIcon icon={faEdit} /></Button>
    )
}

export default ButtonUpdateOrderStatus