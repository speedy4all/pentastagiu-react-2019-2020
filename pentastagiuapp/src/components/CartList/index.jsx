import React, { Component } from "react";
import Car from "../Car";
import "./CartList.css";

export default class CartList extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      carsLoaded: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        cartItems: [
          {
            id: 1,
            name: "Audi",
            engine: "3.0",
            combustible: "disel",
            color: "black",
            price: "1000"
          },
          {
            id: 2,
            name: "Bmw",
            engine: "3.0",
            combustible: "benzine",
            color: "blue",
            price: "1000"
          },
          {
            id: 3,
            name: "Mercedes",
            engine: "2.2",
            combustible: "benzine",
            color: "silver",
            price: "1000"
          },
          {
            id: 4,
            name: "Opel",
            engine: "2",
            combustible: "disel",
            color: "white",
            price: "1000"
          }
        ],
        carsLoaded: true
      });
    }, 500);
  }

  renderCarList = () =>
    this.state.cartItems.map(item => (
      <Car
        key={item.id}
        name={item.name}
        engine={item.engine}
        combustible={item.combustible}
        color={item.color}
        price={item.price}
      />
    ));

  render() {
    if (!this.state.carsLoaded)
      return <div className="loading">Loading...</div>;
    return <div className="CartList">{this.renderCarList()}</div>;
  }
}
