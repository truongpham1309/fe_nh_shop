import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { IconClose } from "../../../assets";
import { authorizationContext } from "../../../contexts/Authenzication";
import { useLogin } from "../../../hooks/useLogin";
import "./../../../sass/login.scss";

const LoginComponent = () => {
    const { login, onLogin } = useLogin();
    const [token] = useContext(authorizationContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            toast.success("Bạn đã đăng nhập!");
            setTimeout(() => {
                navigate('/');
            }, 1000)
        }
    }, [])
    return (
        <>
            <div className="container">
                <ToastContainer />
                <div className="form">
                    <div className="form-close">
                        <Link to={'/'}><img src={IconClose} alt="" /></Link>
                    </div>
                    <h1 className="form-title">Login</h1>
                    <form onSubmit={login.handleSubmit(onLogin)}>
                        <div className="form-group">
                            <label className="form-group__label" htmlFor="email">
                                Email:
                            </label>
                            <input
                                className="form-group__input"
                                type="email"
                                id="email"
                                {...login.register("email", { required: true })}
                            />
                            {login.formState.errors.email && <span>Email is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-group__label">
                                Password:
                            </label>
                            <input
                                type="password"
                                className="form-group__input"
                                id="password"
                                {...login.register("password", { required: true })}
                            />
                            {login.formState.errors.password && <span>Password is required</span>}
                        </div>
                        <button type="submit" className="form-button">
                            Login
                        </button>
                        {/* <div className="form-social__button">
                            <button className="btn form-social__fb">
                                <a>
                                    <img src={IconFb} alt="" />
                                    Facebook
                                </a>
                            </button>
                            <button className="form-social__gg btn">
                                <a href="">
                                    <img src={IconGG} alt="" />
                                    Google
                                </a>
                            </button>
                        </div> */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginComponent