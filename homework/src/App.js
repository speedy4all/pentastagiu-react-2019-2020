import React, { Component } from "react";
import "./App.css";

import Header from "./components/header/header";
//import Laptop from "./components/laptop/laptop";
import CartItem from "./components/cartItem/cartitem";
import LaptopList from "./components/laptoplist/laptoplist";
import { LocalContext } from "./context";
import { ThemeContext } from "./context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laptops: [],
      laptopsCart: [],
      showInfo: false,
      type: "new",
      theme: ""
    };
  }

  componentDidMount() {
    this.setState({
      laptops: [
        {
          id: 1,
          name: "Acer",
          description: "school laptop",
          color: "red",
          price: "300 Euro"
        },
        {
          id: 2,
          name: "Hp",
          description: "office laptop",
          color: "blue",
          price: "400 Euro"
        },
        {
          id: 3,
          name: "Apple",
          description: "business laptop",
          color: "silver",
          price: "1000 Euro"
        },
        {
          id: 4,
          name: "Trackstor",
          description: "gaming laptop",
          color: "Black",
          price: "900 Euro"
        },
        {
          id: 5,
          name: "Dell",
          description: "business laptop",
          color: "yellow",
          price: "985 Euro"
        }
      ]
    });
  }
  onShowClick = e => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  changeType = () => {
    this.setState({ type: "refurbished" });
  };

  changeTheme = () => {
    this.setState({ theme: "bg-info" });
  };
  renderList = () => (
    <LaptopList items={this.state.laptops} addToCart={this.addToCart} />
  );

  renderCart = () =>
    this.state.laptopsCart.map((item, index) => (
      <CartItem
        className="col-sm-6"
        key={`${item.id}-${index}`}
        removeFromCart={this.removeFromCart}
        add={this.addToCart}
        itemId={item.id}
        name={item.name}
        description={item.description}
        color={item.color}
        price={item.price}
        count={item.count}
        decreaseCount={this.removeOneFromCart}
        type={this.state.type}
      />
    ));
  cleanCart = () => {
    //clear cartList
    this.setState({ laptopsCart: [] });
  };

  addToCart = itemId => {
    const itemToAdd = this.state.laptops.find(x => x.id === itemId);

    if (!itemToAdd) {
      return undefined;
    }

    const cartListUpdated = this.state.laptopsCart.slice();
    const itemAlreadyAdded = cartListUpdated.find(x => x.id === itemId);
    //console.log(cartListUpdated, itemAlreadyAdded);
    if (itemAlreadyAdded) {
      itemAlreadyAdded.count++;
    } else {
      const newItem = Object.assign({}, itemToAdd);
      newItem.count = 1;
      cartListUpdated.push(newItem);
      //console.log(cartListUpdated);
    }

    this.setState({ laptopsCart: cartListUpdated });
    console.log(this.state.laptopsCart);
  };
  removeFromCart = itemId => {
    const cartUpdated = this.state.laptopsCart.filter(
      index => index.id !== itemId
    );
    //console.log(cartUpdated);
    this.setState({ laptopsCart: cartUpdated });
  };

  removeOneFromCart = itemId => {
    let cartListUpdated = this.state.laptopsCart.slice();
    const itemToRemove = cartListUpdated.find(x => x.id === itemId);
    if (itemToRemove && itemToRemove.count === 1) {
      cartListUpdated = cartListUpdated.filter(x => x.id !== itemId);
    } else {
      itemToRemove.count = itemToRemove.count - 1;
    }
    this.setState({ cart: cartListUpdated });
  };
  /*if (itemToRemove) {
      //const index = this.state.laptopsCart.indexOf(itemToRemove);
      const cartUpdated = this.state.laptopsCart.splice(0, 1);
      this.setState({ laptopsCart: cartUpdated });
    }*/

  render() {
    const { showInfo } = this.state;

    return (
      <ThemeContext.Provider value={{ theme: this.state.theme }}>
        <LocalContext.Provider value={{ type: this.state.type }}>
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
            <button
              type="button"
              className="btn btn-outline-info btn-sm mr-2"
              onClick={this.cleanCart}
            >
              Clear Cart
            </button>
            <span className="badge badge-pill badge-warning">
              {this.state.type}
            </span>
            <button
              className="btn btn-outline-info btn-sm ml-2"
              onClick={this.changeType}
            >
              Change Type
            </button>
            <button
              className="btn btn-outline-info btn-sm float-right"
              onClick={this.changeTheme}
            >
              Change Theme
            </button>
            <div className="row bg-light">
              {showInfo ? this.renderCart() : null}
            </div>
            <div className="row">{showInfo ? this.renderList() : null}</div>
          </div>
        </LocalContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
