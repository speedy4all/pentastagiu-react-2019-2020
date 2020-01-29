import React from "react";
import "./App.css";
import BillItem from "./components/BillItem";
import { CartItem } from "./components/CartItem";
import BillItemList from "./components/BillItemList";
import { LocaleContext, ThemeContext, AppContext } from "./context";
import CartList from "./components/CartList";

export default class App extends React.Component {
  static contextType = AppContext;

  render() {
    if (!this.context.itemLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <LocaleContext.Provider value={{ language: this.context.language }}>
        <div className="cart-container">
          <button onClick={this.context.cleanCart}>Remove from cart</button>
          <span>Language: {this.context.language}</span>
          <button onClick={this.context.changeLanguage}>Change language</button>
          <CartList />
        </div>
        <BillItemList />
      </LocaleContext.Provider>
    );
  }
}
