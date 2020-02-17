import React, {useContext} from "react";
import "./app-header.css";
import {Link,withRouter} from "react-router-dom";
import {ThemeContext} from "../context/context";

const AppHeader = (props) => {
    const {changeThemeColor, changeCurrency} = useContext(ThemeContext);
    const {title, logo} = props;

    return (<>
            <div className="app-header">
                <div className="app-header__title">
                    <h1>{title}</h1>
                </div>
                <div className="app-header__action">
                    <div className="action-box action-box--theme-color">
                        <div className="action-box__title">Theme color</div>
                        <div className="action-box__options">
                            <button className="btn btn-dark" onClick={() => changeThemeColor('table-dark')}>Dark
                            </button>
                            <button className="btn btn-secondary"
                                    onClick={() => changeThemeColor('table-light')}>Light
                            </button>
                        </div>
                    </div>
                    <div className="action-box action-box--currency">
                        <div className="action-box__title">Currency</div>
                        <div className="action-box__options">
                            <button className="btn btn-primary" onClick={() => changeCurrency('RON')}>RON</button>
                            <button className="btn btn-secondary" onClick={() => changeCurrency('EURO')}>EURO</button>
                        </div>
                    </div>
                </div>
                <div className="app-header__logo">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand">Navbar</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <span className="nav-item nav-link"><Link to="/">Home</Link></span>
                        <span className="nav-item nav-link"><Link to="/cart">Cart</Link></span>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default withRouter(AppHeader);
