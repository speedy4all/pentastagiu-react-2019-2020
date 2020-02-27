import React, { Component } from "react";
import "./App.css";
import { ThemeToggle } from "./Components/ThemeToggle";
import { LocalContext, AppContext } from "./Context/context";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navbar from "./Components/Navbar";
import { Slideshow } from "./Components/slideShow";
import {configWithRouter as ConfigWithRouter} from './Components/routerConfiguration';

const history = createBrowserHistory();

export default class App extends React.Component {
  static contextType = AppContext;

  render() {
    if (!this.context.mountainsLoaded) return <div>Loading...</div>;
    return (
      <Router history={history}>
        <LocalContext.Provider value={{ language: this.context.language }}>
          <header>
            <button className="button language-btn" onClick={this.context.changeLanguage}>
              {this.context.language}
            </button>
            <Navbar />
            <ThemeToggle />
          </header>
            <Slideshow />
          <ConfigWithRouter />
        </LocalContext.Provider>
      </Router>
    );
  }
}
