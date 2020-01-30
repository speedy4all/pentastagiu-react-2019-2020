import React from "react";
import "./App.css";
import { Delivery } from "./components/Delivery";
import Inventory from "./components/Inventory";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    /**/
    this.state = {
      itemList: [],
      itemLoaded: false,
      cartList: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        itemList: [
          {
            id: 1,
            giftName: "Iron-Man",
            price: 200,
            edition: "Standard Edition",
            delivery: "Free Delivery"
          },

          {
            id: 2,
            giftName: "McQueen",
            price: 260,
            edition: "Limited Edition",
            delivery: "Free Delivery"
          },

          {
            id: 3,
            giftName: "Avengers-Backpack",
            price: 450,
            edition: "Limited Edition",
            delivery: "Free Delivery"
          },

          {
            id: 4,
            giftName: "Minions",
            price: 400,
            edition: "Standard Edition",
            delivery: "Free Delivery"
          }
        ],
        itemLoaded: true
      });
    }, 500);
  }

  renderList = () =>
    this.state.itemList.map(item => {
      return (
        <Inventory
          key={item.id}
          addToCart={this.addToCart}
          itemId={item.id}
          giftName={item.giftName}
          price={item.price}
          edition={item.edition}
        />
      );
    });

  renderCart = () =>
    this.state.cartList.map((cartItem, index) => {
      return (
        <Delivery
          key={`${cartItem.id}-${index}`}
          remove={this.removeFromCart}
          add={this.addToCart}
          decreaseCount={this.removeOneFromCart}
          itemId={cartItem.id}
          giftName={cartItem.giftName}
          price={cartItem.price}
          edition={cartItem.edition}
          delivery={cartItem.delivery}
          count={cartItem.count}
        />
      );
    });

  cleanCart = () => {
    this.setState({
      cartList: []
    });
  };

  removeFromCart = itemId => {
    const cartUpdated = this.state.cartList.filter(x => x.id !== itemId);
    this.setState({ cartList: cartUpdated });
  };

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

  removeOneFromCart = itemId => {
    let cartListUpdated = this.state.cartList.slice();
    const itemToRemove = cartListUpdated.find(x => x.id === itemId);

    if (itemToRemove && itemToRemove.count === 1) {
      cartListUpdated = cartListUpdated.filter(x => x.id !== itemId);
    } else {
      itemToRemove.count = itemToRemove.count - 1;
    }

    this.setState({ cart: cartListUpdated });
  };

  render() {
    if (!this.state.itemLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <div className="cart-container">
          <button onClick={this.cleanCart}>Remove from cart</button>
          {this.renderCart()}
        </div>
        <div className="list-container">{this.renderList()}</div>
      </>
    );
  }
}
