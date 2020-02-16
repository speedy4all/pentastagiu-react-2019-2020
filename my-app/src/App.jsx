import React, { Component } from "react";
import "./App.css";
import MountainList from "./Components/mountainsList";
import CartList from "./Components/CartList";
import Home from "./Components/Home";
import About from "./Components/Navbar/About";
import { ThemeToggle } from "./Components/ThemeToggle";
import { LocalContext, AppContext } from "./Context/context";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navbar from "./Components/Navbar";
import Trip from "./Components/trip";
import SeaTrip from "./Components/trip/seaTrip";
import SpaResort from "./Components/trip/spaResort";
import SpaHotel from "./Components/trip/spaResortHotel";
import Components from "./Components/Home/components";
import User from "./Components/Home/user";
import { Slideshow } from "./Components/slideShow";

const history = createBrowserHistory();

export default class App extends React.Component {
  static contextType = AppContext;

  render() {
    if (!this.context.mountainsLoaded) return <div>Loading...</div>;
    return (
      <Router history={history}>
        <LocalContext.Provider value={{ language: this.context.language }}>
          <header>
          <Navbar />
            <button onClick={this.context.changeLanguage}>
              {this.context.language}
            </button>
            <ThemeToggle />
            <Slideshow/>
          </header>
          <Switch>
            {/* about */}
            <Route path="/about" component={About} />
            {/* trips */}
            <Route exact path="/trip/mountain" component={MountainList} />
            <Route exact path="/trip/spa/:id" component={SpaHotel} />
            <Route exact path="/trip/spa" component={SpaResort} />
            <Route exact path="/trip/seaTrip" component={SeaTrip} />
            <Route exact path="/trip" component={Trip} />
            {/* home */}
            <Route exact path="/home/components" component={Components} />
            <Route exact path="/home/user" component={User} />
            <Route exact path="/" component={Home} />
          </Switch>

          <div className="cart-container">
            <CartList />
            <button onClick={this.context.cleanCart}>Remove</button>
          </div>
        </LocalContext.Provider>
      </Router>
    );
  }
}
