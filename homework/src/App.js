import React, { Component } from "react";
import "./App.css";

import Header from "./components/header/header";
import Laptops from "./components/laptops/laptops";

class App extends Component {
  state = {
    showInfo: false
  };
  onShowClick = e => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { showInfo } = this.state;

    return (
      <div className="container">
        <Header branding="Laptop Store" headline="Super Price" />
        <div className="text-center my-3">
          <button
            type="button"
            className="btn btn-outline-info btn-sm "
            onClick={this.onShowClick}
          >
            Show Products
          </button>
        </div>
        <div className="col-sm-6">{showInfo ? <Laptops /> : null}</div>
      </div>
    );
  }
}

export default App;
