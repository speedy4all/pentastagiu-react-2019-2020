import React from "react";
import "./App.css";
import BillItem from "./components/BillItem";
import { CartItem } from "./components/CartItem";
import BillItemList from "./components/BillItemList";
import { LocaleContext, ThemeContext, AppContext } from "./context";
import CartList from "./components/CartList";
import { BrowserRouter as Router, Route, Link, useHistory, Redirect, withRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from "./components/Home";
const history = createBrowserHistory();
function RedirectWithStatus({ from, to, status }) {
  return (
    <Route
      render={({ staticContext }) => {
        // there is no `staticContext` on the client, so
        // we need to guard against that here
        if (staticContext) staticContext.status = status;
        console.log(staticContext)
        return <Redirect from={from} to={to} />;
      }}
    />
  );
}

const Context = React.createContext();
export default class App extends React.Component {
  static contextType = AppContext;


  render() {
    if (!this.context.itemLoaded) {
      return <div>Loading...</div>;
    }
    console.log(this.context)

    return (
      <Router history={history}>
      <LocaleContext.Provider value={{ language: this.context.language }}>
        <Route exact path="/list" component={BillItemList} />
        <Route exact path="/home" component={Home} />
        {/*<RedirectWithStatus status={404} from="/list" to="/" />*/}
        <div className="cart-container">
          <button onClick={this.context.cleanCart}>Remove from cart</button>
          <span>Language: {this.context.language}</span>
          <button onClick={this.context.changeLanguage}>Change language</button>
          <CartList />
        </div>
        {/*<BillItemList />*/}
      </LocaleContext.Provider>
      </Router>
    );
  }
}
