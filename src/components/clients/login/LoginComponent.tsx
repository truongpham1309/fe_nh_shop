import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { useSessionStorage } from "../../../hooks/useLocal";
import { useLogin } from "../../../hooks/useLogin";
import "./../../../sass/login.scss";

const LoginComponent = () => {
    const { login, onLogin } = useLogin({ type: 'LOGIN' });
    const [token] = useSessionStorage("token", "");
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            Swal.fire({
                icon: 'success',
                title: "Bạn đã đăng nhập!",
                confirmButtonText: token?.user?.role === "admin" ? "Admin" : "Quay về",
                showCancelButton: token?.user?.role === "admin" ? true : false,
                allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed){
                    if(token?.user?.role === 'admin') {
                        navigate("/admin");
                        return;
                    }
                };
                navigate(-1);
            })
        }
    }, [])
    return (
        <>
            <ToastContainer />
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a
                        href="#"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
                    >
                        <img
                            className="w-8 h-8 mr-2"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                            alt="logo"
                        />
                        NHSHOP
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={login.handleSubmit(onLogin)}>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-left text-gray-900 "
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        autoComplete=""
                                        {...login.register("email", {required: true})}
                                        className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="name@company.com"
                                    />
                                    {login.formState.errors.email && <p className="text-red-500 text-left">Email is required</p>}
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm text-left font-medium text-gray-900 "
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        {...login.register("password", {required: true})}
                                        id="password"
                                        autoComplete=""
                                        placeholder="••••••••"
                                        className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    />
                                    {login.formState.errors.password && <p className="text-red-500 text-left">Password is required</p>}
                                </div>
                                <div className="flex items-center justify-between">
                                    
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full h-10 btn btn-primary bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                >
                                    Sign in
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet?{" "}
                                    <Link
                                        to="/register"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Sign up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LoginComponent