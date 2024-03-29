import { Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { IconClose, IconFb, IconGG } from "../../../assets"
import { useLogin } from "../../../hooks/useLogin";

const RegisterComponent = () => {
    const { login, onLogin } = useLogin({type: "REGISTER"});
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
                                Username:
                            </label>
                            <input
                                className="form-group__input"
                                type="text"
                                id="email"
                                {...login.register("username", { required: true })}
                            />
                            {login.formState.errors.username && <span>Username is required</span>}
                        </div>
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

                        <div className="form-group">
                            <label htmlFor="password" className="form-group__label">
                                Confirm Password:
                            </label>
                            <input
                                type="password"
                                className="form-group__input"
                                id="password"
                                {...login.register("confirmPassword", { required: true })}
                            />
                            {login.formState.errors.confirmPassword && <span>Confirm is required</span>}
                        </div>
                        <button type="submit" className="form-button">
                            Login
                        </button>
                        <Link to={"/login"} style={{textDecoration: "none"}}><p style={{margin: 30 }}>Bạn đã có tài khoản!</p></Link>
                        <div className="form-social__button">
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
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterComponent