import React, { Component } from "react";
import "./App.css";

import Header from "./components/header/header";
//import Laptop from "./components/laptop/laptop";
import CartItemList from "./components/cartItemList/cartItemList";
import LaptopList from "./components/laptoplist/laptoplist";
import { LocalContext, ThemeContext, AppContext } from "./context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/about/about";
import Refurbished from "./components/refurbished/refurbished";

class App extends Component {
  static contextType = AppContext;

  componentDidUpdate() {
    console.log(this.context);
  }

  /*renderList = () => (
    <LaptopList
      items={this.context.laptops}
      addToCart={this.context.addToCart}
    />
  );*/

  /* renderCart = () =>
    this.context.laptopsCart.map((item, index) => (
      <CartItem
        className="col-sm-6"
        key={`${item.id}-${index}`}
        removeFromCart={this.context.removeFromCart}
        add={this.context.addToCart}
        itemId={item.id}
        name={item.name}
        description={item.description}
        color={item.color}
        price={item.price}
        count={item.count}
        decreaseCount={this.context.removeOneFromCart}
        type={this.context.type}
      />
    ));*/

  /*if (itemToRemove) {
      //const index = this.state.laptopsCart.indexOf(itemToRemove);
      const cartUpdated = this.state.laptopsCart.splice(0, 1);
      this.setState({ laptopsCart: cartUpdated });
    }*/

  render() {
    const { showInfo } = this.context;

    return (
      <ThemeContext.Provider value={{ theme: this.context.theme }}>
        <LocalContext.Provider value={{ type: this.context.type }}>
          <BrowserRouter>
            <div className="container">
              <Header branding="About" headline="Refurbished" />
              <Switch>
                <Route exact path="/About" component={About} />
                <Route exact path="/Refurbished" component={Refurbished} />
              </Switch>
              <div className="text-center my-3">
                <button
                  type="button"
                  className="btn btn-outline-info btn-sm "
                  onClick={this.context.onShowClick}
                >
                  Show Products
                </button>
              </div>
              <button
                type="button"
                className="btn btn-outline-info btn-sm mr-2"
                onClick={this.context.cleanCart}
              >
                Clear Cart
              </button>
              <span className="badge badge-pill badge-warning">
                {this.context.type}
              </span>
              <button
                className="btn btn-outline-info btn-sm ml-2"
                onClick={this.context.changeType}
              >
                Change Type
              </button>
              <button
                className="btn btn-outline-info btn-sm float-right"
                onClick={this.context.changeTheme}
              >
                Change Theme
              </button>
              <div className="row bg-light">
                {showInfo ? <CartItemList /> : null}
              </div>
              <div className="row">{showInfo ? <LaptopList /> : null}</div>
            </div>
          </BrowserRouter>
        </LocalContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
