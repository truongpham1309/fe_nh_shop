import { Link } from "react-router-dom"
import { Icon1, Icon2, Icon3, Icon4, Logo } from "../../assets"

const HeaderClient = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <Link to="#" className="header__logo">
                            <img src={Logo} alt="" />
                        </Link>
                        <div className="button-mobile">
                            <button>=</button>
                        </div>
                        <nav className="main-menu">
                            <ul className="main-menu__list">
                                <li className="main-menu__item">
                                    <Link to="/" className="main-menu__link">
                                        Home
                                    </Link>
                                </li>
                                <li className="main-menu__item">
                                    <Link to="/products" className="main-menu__link">
                                        Shop
                                    </Link>
                                </li>
                                <li className="main-menu__item">
                                    <Link to="#" className="main-menu__link">
                                        About
                                    </Link>
                                </li>
                                <li className="main-menu__item">
                                    <Link to="#" className="main-menu__link">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-items">
                            <div className="header-item-user">
                                <Link to="/login">
                                    <img src={Icon1} />
                                </Link>
                            </div>
                            <div className="header-item-user">
                                <span>
                                    <img src={Icon2} />
                                </span>
                            </div>
                            <div className="header-item-user">
                                <Link to="/product/detail">
                                    <img src={Icon3} />
                                </Link>
                            </div>
                            <div className="header-item-user">
                                <Link to="/cart">
                                    <img src={Icon4} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderClient