import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRouterPermission = ({ user, children }: any) => {
  const navigate = useNavigate();
    if(!user) {
      Swal.fire({
        icon: "question",
        title: "Bạn chưa đăng nhập!",
        showCancelButton: false,
        confirmButtonText: "Đăng nhập",
        allowOutsideClick: false,
      }).then((result) => {
        if(result.isConfirmed){
          navigate("/login");
        }else {
          navigate(-1);
      }})
    }else{
      return children
    }

    
}

export default PrivateRouterPermission