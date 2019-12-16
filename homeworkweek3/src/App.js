import React, { Component } from "react";
import Header from "./components/header";
import Laptops from "./components/laptops";

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
        <Header branding="HomeWork Week3" />
        <div className="text-center my-2">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.onShowClick}
          >
            Show Laptops
          </button>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center mt-5">
          {showInfo ? <Laptops /> : null}
        </div>
      </div>
    );
  }
}

export default App;
