import React from "react";
import "./App.css";
import { Bag } from "./components/Bag";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bags: [
        { id: 1, name: "Iron-Man", price: "1299", paper: "wrapping-paper" },
        { id: 2, name: "Minions-2", price: "1399", paper: "wrapping-paper" },
        { id: 3, name: "McQueen", price: "1200", edition: "Standard-Edition", paper: "wrapping-paper"},
        { id: 4, name: "Avengers-Backpack", price: "250", edition: "Limited-Edition"},
        { id: 5, name: "Samsung-Note-10", price: "4000", edition: "Limited-Edition"}
      ]
    };
  }

  renderBags = () => {
    return this.state.bags.map(bag => (
      <Bag
        key={bag.id}
        name={bag.name}
        price={bag.price}
        edition={bag.edition}
        paper={bag.paper}
      />
    ));
  };

  render() {
    return (
      <div className="App">
        <div className="santa-bag">
          {this.renderBags()}
        </div>
      </div>
    );
  }
}
