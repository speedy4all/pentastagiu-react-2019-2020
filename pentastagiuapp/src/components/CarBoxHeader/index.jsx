import React, { Component } from "react";
import "./CarBoxHeader.css";

export default class CarBoxHeader extends Component {
  render() {
    const { title, logo } = this.props;
    return (
      <div className="carBoxHeader">
        <div className="carBoxHeader__title">
          <h1>{title}</h1>
        </div>
        <div className="carBoxHeader__logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    );
  }
}
