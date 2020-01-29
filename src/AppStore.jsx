import React, { Component } from "react";
import { AppContext } from "./context";
import { fetchItemsList, removeOneFromCartAPI } from "./api/itemsAPI";

export default class AppStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      itemLoaded: false,
      cartList: [],
      language: "en"
    };
  }

  addToCart = itemId => {
    const itemToAdd = this.state.itemList.find(x => x.id === itemId);

    if (!itemToAdd) {
      return undefined;
    }

    const cartListUpdated = this.state.cartList.slice();
    const itemAlreadyAdded = cartListUpdated.find(x => x.id === itemId);

    if (itemAlreadyAdded) {
      itemAlreadyAdded.count++;
    } else {
      const newItem = Object.assign({}, itemToAdd);
      newItem.count = 1;
      cartListUpdated.push(newItem);
    }

    this.setState({ cartList: cartListUpdated });
  };

  removeFromCart = itemId => {
    const cartUpdated = this.state.cartList.filter(x => x.id !== itemId);
    this.setState({ cartList: cartUpdated });
  };

  removeOneFromCart = itemId => {
    const cartListUpdated = removeOneFromCartAPI(itemId, this.state.cartList);
    this.setState({ cart: cartListUpdated });
  };

  cleanCart = () => {
    this.setState({
      cartList: []
    });
  };

  changeLanguage = () => {
    this.setState({ language: "ro" });
  };

  componentDidMount() {
    fetchItemsList().then(data =>
      this.setState({ itemList: data, itemLoaded: true })
    );
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          removeOneFromCart: this.removeOneFromCart,
          cleanCart: this.cleanCart,
          changeLanguage: this.changeLanguage
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
