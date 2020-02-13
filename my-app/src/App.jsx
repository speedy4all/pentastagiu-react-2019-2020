import React from "react";
import "./App.css";
import { Header } from "./Components/header";
import MountainList from "./Components/mountainsList";
import { LocalContext, AppContext } from "./Context/context";
import CartList from "./Components/CartList";
import { ThemeToggle } from "./Components/ThemeToggle";

export default class App extends React.Component {
  static contextType = AppContext;

  render() {
    if (!this.context.mountainsLoaded) return <div>Loading...</div>;
    return (
      <LocalContext.Provider value={{ language: this.context.language }}>
        <header>
          <Header
            title={this.context.header.title}
            subtitle={this.context.header.subtitle}
          />
          <button onClick={this.context.changeLanguage}>
            {this.context.language}
          </button>
        </header>
        <div className="cart-container">
          <CartList />
          <button onClick={this.context.cleanCart}>Remove</button>
        </div>
        <MountainList />
        <ThemeToggle />
      </LocalContext.Provider>
    );
  }
}
