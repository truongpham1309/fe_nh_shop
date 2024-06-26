import { faBookOpenReader, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { useSessionStorage } from '../../hooks/useLocal';

const AdminLayout = ({ redirectPath = "/login" }: { redirectPath?: any }) => {
    const navigate = useNavigate();
    const [data] = useSessionStorage('token', {});
    if (!data) {
        Swal.fire({
            icon: 'warning',
            title: "Bạn chưa đăng nhập!",
            confirmButtonText: 'Đăng nhập',
            cancelButtonText: 'Hủy',
            showCancelButton: true,
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                return navigate(redirectPath);
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                return navigate(-1);
            }
        })
    } else if (data?.user?.role !== "admin") {
        Swal.fire({
            icon: 'warning',
            title: "Bạn không phải admin!",
            confirmButtonText: 'Quay về',
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                return navigate(-1);
            }
        })
    }

    return (
        <div className="flex min-h-screen w-full bg-[#f8f9fa]">
            <ToastContainer />
            <div className="lg:w-64 lg:px-4 pl-4 lg:min-w-[256px] duration-500">
                <div className="h-full w-8 lg:w-full">
                    <a
                        className="block lg:px-8 lg:py-3 my-2 text-sm text-slate-700"
                        href="#"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png"
                            className="hidden lg:block"
                        />
                        {/* <img src={imgLogoIcon} class="lg:hidden inline-block" /> */}
                    </a>
                    <hr className="h-px border-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                    <div className="mt-4">
                        <ul className="flex flex-col">
                            <li>
                                <Link
                                    className="text-sm flex items-center lg:px-4 py-2.5 rounded-lg lg:bg-white lg:shadow-xl"
                                    to="/admin"
                                >
                                    <div className="lg:mr-2 flex h-8 w-8 items-center justify-center rounded-lg">
                                        <FontAwesomeIcon icon={faHome} />
                                    </div>
                                    <span className="ml-1 opacity-100 hidden lg:block">
                                        Products
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm flex items-center lg:px-4 py-2.5 rounded-lg"
                                    to="/admin/categories"
                                >
                                    <div className="lg:mr-2 flex h-8 w-8 items-center justify-center rounded-lg">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M12 2l-5.5 9h11z" />
                                            <circle cx="17.5" cy="17.5" r="4.5" />
                                            <path d="M3 13.5h8v8H3z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 opacity-100 hidden lg:block">
                                        Categories
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm flex items-center lg:px-4 py-2.5 rounded-lg"
                                    to="/admin/orders"
                                >
                                    <div className="lg:mr-2 flex h-8 w-8 items-center justify-center rounded-lg">
                                        <FontAwesomeIcon icon={faBookOpenReader} />
                                    </div>
                                    <span className="ml-1 opacity-100 hidden lg:block">Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm flex items-center lg:px-4 py-2.5 rounded-lg"
                                    to="/"
                                >
                                    <div className="lg:mr-2 flex h-8 w-8 items-center justify-center rounded-lg">
                                        <i className="fa-solid fa-user" />
                                    </div>
                                    <span className="ml-1 opacity-100 hidden lg:block">
                                        Client
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex-grow px-4 flex flex-col">
                <nav className="flex items-center justify-between py-2">
                    <h6 className="font-bold capitalize text-slate-800">DashBoard Product</h6>
                    <div className="flex items-center sm:flex-row flex-col-reverse">
                        <div className="relative">
                            <form className="flex items-center rounded-full overflow-hidden relative w-1a0 hover:w-auto duration-500 mr-2">
                                <input
                                    name="search"
                                    type="text"
                                    autoComplete="off"
                                    className="h-10 outline-none py-1 pl-4 pr-10 w-44 placeholder:italic  text-[#ABB7C4]"
                                    placeholder="Search..."
                                />
                                <button
                                    type="submit"
                                    className="absolute top-0 right-0 h-full w-10 text-[#F27221] text-lg "
                                >
                                    <i className="fa-solid fa-magnifying-glass" />
                                </button>
                            </form>
                        </div>
                        <div className="flex items-center">

                            <div className="group relative text-[#F27221] text-xl w-10 h-10 ml-4 flex items-center justify-center border border-[#ec4899] rounded-full cursor-pointer">
                                <img
                                    src=""
                                    alt=""
                                    className="w-full h-full rounded-full"
                                />
                                <div className="hidden group-hover:block absolute top-[120%] right-0">
                                    <ul className="text-base bg-[#F27221] min-w-40 p-2 z-10 relative">
                                        <li>
                                            <Link
                                                to={`infor`}
                                                className="py-1 block text-white duration-300"
                                            >
                                                Thông tin
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="py-1 block text-white duration-300"
                                            >
                                                Quản trị
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="absolute -top-3 w-full h-4 bg-transparent" />
                                    <div className="absolute bottom-full right-3 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#F27221]"></div>
                                </div>
                            </div>
                            <div className="text-[#F27221] text-2xl ml-1 w-10 h-10 flex items-center justify-center cursor-pointer">
                                <i className="fa-solid fa-arrow-right-from-bracket" />
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="flex-grow relative flex flex-col min-w-0 mb-6 bg-white shadow-sm rounded-2xl">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout