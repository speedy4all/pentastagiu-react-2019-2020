import React, { Component } from "react";
import "./app-header.css";

import {ThemeContext} from "../context/context";

export default class AppHeader extends Component {
    static contextType = ThemeContext;

    render() {
        const {changeThemeColor, changeCurrency} = this.context;
        const { title, logo } = this.props;

        return (
            <div className="app-header">
                <div className="app-header__title">
                    <h1>{title}</h1>
                </div>
                <div className="app-header__action">
                   <div className="action-box action-box--theme-color">
                       <div className="action-box__title">Theme color</div>
                       <div className="action-box__options">
                           <button className="btn btn-dark" onClick={()=>changeThemeColor('table-dark')}>Dark</button>
                           <button className="btn btn-secondary" onClick={()=>changeThemeColor('table-light')}>Light</button>
                       </div>
                   </div>
                    <div className="action-box action-box--currency">
                        <div className="action-box__title">Currency</div>
                        <div className="action-box__options">
                            <button className="btn btn-primary" onClick={()=>changeCurrency('RON')}>RON</button>
                            <button className="btn btn-secondary" onClick={()=>changeCurrency('EURO')}>EURO</button>
                        </div>
                    </div>
                </div>
                <div className="app-header__logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        );
    }
}
