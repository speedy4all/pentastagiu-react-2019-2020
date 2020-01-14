import React, { Component } from "react";
import CartList from "../CartList";
import "./Cart.css";

export default class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <CartList />
      </div>
    );
  }
}
