import React from "react";
import "./App.css";
import { Header } from "./Components/header";
import MountainList from "./Components/mountainsList";
import CartList from "./Components/CartList";
import Home from "./Components/Home";
import About from "./Components/About";
import { ThemeToggle } from "./Components/ThemeToggle";
import { LocalContext, AppContext } from "./Context/context";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navbar from "./Components/Navbar";
import Trip from "./Components/trip";

const history = createBrowserHistory();

export default class App extends React.Component {
  static contextType = AppContext;

  render() {
    if (!this.context.mountainsLoaded) return <div>Loading...</div>;
    return (
      <Router history={history}>
        <LocalContext.Provider value={{ language: this.context.language }}>
          <header>
            <button onClick={this.context.changeLanguage}>
              {this.context.language}
            </button>
            <ThemeToggle />
            <Header
              title={this.context.header.title}
              subtitle={this.context.header.subtitle}
            />
          </header>
          <Navbar />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/trip" component={Trip} />
          <Route exact path="/trip/mountain" component={MountainList} />

          {/* <div className="cart-container">
            <CartList />
            <button onClick={this.context.cleanCart}>Remove</button>
          </div> */}

          {/* <MountainList /> */}
        </LocalContext.Provider>
      </Router>
    );
  }
}
