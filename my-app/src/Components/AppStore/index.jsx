import React, { Component } from "react";
import { AppContext } from "../../Context/context";
import { fetchMountainList } from "../../api/mountainsAPI";

export default class AppStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: {},
      cartList: [],
      mountains: [],
      itemLoaded: false,
      cartLoaded: false,
      language: "Ro"
    };
  }
  changeLanguage = () => {
    this.setState({ language: "En" });
  };
  cleanCart = () => {
    this.setState({ cartList: [] });
  };
  removeFromCart = itemId => {
    const cartUpdated = this.state.cartList.filter(x => x.id !== itemId);
    this.setState({ cartList: cartUpdated });
  };

  decrease = itemId => {
    // debugger;
    let cartUpdated = this.state.cartList.slice();
    let cartItem = cartUpdated.find(item => item.id === itemId);

    if (cartItem.countItem === 1) {
      // detlete row
      cartUpdated = cartUpdated.filter(x => x.id !== itemId);
    } else {
      // decrese the trips
      cartItem.countItem--;
    }
    this.setState({ cartList: cartUpdated });
  };

  addToCart = itemId => {
    const itemToAdd = this.state.mountains.find(item => item.id === itemId);
    if (!itemToAdd) {
      return undefined;
    }

    const cartUpdated = this.state.cartList.slice();
    const cartItem = cartUpdated.find(item => item.id === itemId);
    if (!cartItem) {
      // create a new trip
      const newItem = Object.assign({}, itemToAdd);
      newItem.countItem = 1;
      cartUpdated.push(newItem);
    } else {
      // increse the trips
      cartItem.countItem++;
    }
    this.setState({ cartList: cartUpdated });
  };

  componentDidMount() {
    this.setState({
      header: {
        title: "Trips in the magical romanian mountains",
        subtitle: "Are you sure that you know your country?"
      }
    });
    fetchMountainList().then(data =>
      this.setState({ mountains: data, mountainsLoaded: true })
    );
    // .catch(err => console.log(err));
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          decrease: this.decrease,
          cleanCart: this.cleanCart,
          changeLanguage: this.changeLanguage
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
