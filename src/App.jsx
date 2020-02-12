import React from "react";
import "./App.css";
import BillItem from "./components/BillItem";
import { CartItem } from "./components/CartItem";
import BillItemList from "./components/BillItemList";
import { LocaleContext, ThemeContext, AppContext } from "./context";
import CartList from "./components/CartList";
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import AppStore from "./index";
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

export default class App extends React.Component {
  static contextType = AppContext;

  render() {
    if (!this.context.itemLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <BrowserRouter history={history}>
        <LocaleContext.Provider value={{ language: this.context.language }}>
          <Link to='/about'>About</Link>
          <Link to='/home'>Home</Link>
          <Link to='/'>Items</Link>
          <Route exact path='/' component={BillItemList}/>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <div className="cart-container">
            <button onClick={this.context.cleanCart}>Remove from cart</button>
            <span>Language: {this.context.language}</span>
            <button onClick={this.context.changeLanguage}>Change language</button>
            <CartList />
          </div>

        </LocaleContext.Provider>
      </BrowserRouter>
    );
  }
}
