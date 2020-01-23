import React from "react";
import "./App.css";
import BillItem from "./components/BillItem";
import { CartItem } from "./components/CartItem";
import BillItemList from "./components/BillItemList";
import { LocaleContext, ThemeContext } from "./context";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    /**/
    this.state = {
      itemList: [],
      itemLoaded: false,
      cartList: [],
      language: "en"
    };
  }

  changeLanguage = () => {
    this.setState({ language: "ro" });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        itemList: [
          { id: 1, movieTitle: "X-Men", price: 27, date: "22/02/2020" },
          {
            id: 2,
            movieTitle: "The Dark Knight",
            price: 40,
            date: "03/03/2020"
          },
          { id: 3, movieTitle: "WALL·E", price: 21, date: "12/03/2020" }
        ],
        itemLoaded: true
      });
    }, 500);
  }

  renderList = () => (
    <BillItemList items={this.state.itemList} addToCart={this.addToCart} />
  );

  renderCart = () =>
    this.state.cartList.map((cartItem, index) => {
      return (
        <CartItem
          key={`${cartItem.id}-${index}`}
          remove={this.removeFromCart}
          add={this.addToCart}
          decreaseCount={this.removeOneFromCart}
          itemId={cartItem.id}
          movieTitle={cartItem.movieTitle}
          price={cartItem.price}
          date={cartItem.date}
          count={cartItem.count}
          language={this.state.language}
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
        <LocaleContext.Provider value={{ language: this.state.language }}>
          <div className="cart-container">
            <button onClick={this.cleanCart}>Remove from cart</button>
            <span>Language: {this.state.language}</span>
            <button onClick={this.changeLanguage}>Change language</button>
            {this.renderCart()}
          </div>
          <div className="list-container">{this.renderList()}</div>
        </LocaleContext.Provider>
    );
  }
}
