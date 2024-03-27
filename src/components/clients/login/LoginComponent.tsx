import { Link } from "react-router-dom";
import { IconClose, IconFb, IconGG } from "../../../assets"
import "./../../../sass/login.scss";

const LoginComponent = () => {
    return (
        <>
            <div className="container">
                <div className="form">
                    <div className="form-close">
                        <Link to={'/'}><img src={IconClose} alt="" /></Link>
                    </div>
                    <h1 className="form-title">Login</h1>
                    <form>
                        <div className="form-group">
                            <label className="form-group__label" htmlFor="email">
                                Username:
                            </label>
                            <input
                                className="form-group__input"
                                type="email"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-group__label">
                                Password:
                            </label>
                            <input
                                type="password"
                                className="form-group__input"
                                id="password"
                                name="password"
                            />
                        </div>
                        <button type="submit" className="form-button">
                            Login
                        </button>
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

export default LoginComponent