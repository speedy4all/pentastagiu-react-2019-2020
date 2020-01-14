import React, { Component } from "react";
import "./BoxHeader.css";

export default class BoxHeader extends Component {
  render() {
    const { title, logo } = this.props;
    return (
      <div className="BoxHeader">
        <div className="BoxHeader__title">
          <h1>{title}</h1>
        </div>
        <div className="BoxHeader__logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    );
  }
}
