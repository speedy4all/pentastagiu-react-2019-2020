import React, { Component } from "react";
import Box from "./components/Box";
import "./App.css";
import Cart from "./components/Cart";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Box />
        <Cart />
      </div>
    );
  }
}
