import React, { Component } from "react";
import { AppContext } from "./context";
import { fetchItems } from "./api/itemsAPI";

class AppStore extends Component {
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
    //console.log(this.context);
    fetchItems().then(data => this.setState({ laptops: data }));
  }
  onShowClick = e => {
    this.setState({ showInfo: !this.state.showInfo });
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
  cleanCart = () => {
    //clear cartList
    this.setState({ laptopsCart: [] });
  };
  changeType = () => {
    this.setState({ type: "refurbished" });
  };

  changeTheme = () => {
    this.setState({ theme: "bg-info" });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          onShowClick: this.onShowClick,
          removeFromCart: this.removeFromCart,
          removeOneFromCart: this.removeOneFromCart,
          cleanCart: this.cleanCart,
          changeType: this.changeType,
          changeTheme: this.changeTheme,
          items: this.context.laptops
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppStore;
