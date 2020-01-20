import React, { Component } from "react";
import "./app-header.css";

export default class AppHeader extends Component {
    render() {
        const { title, logo } = this.props;
        return (
            <div className="app-header">
                <div className="app-header__title">
                    <h1>{title}</h1>
                </div>
                <div className="app-header__logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        );
    }
}
