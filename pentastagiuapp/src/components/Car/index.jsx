import React, { Component } from "react";
import "./Car.css";

export default class Car extends Component {
  render() {
    const { name, engine, combustible, color, price } = this.props;
    return (
      <div className="car">
        <div className="item item--name">
          <span>Name:</span> {name}
        </div>
        <div className="item item--engine">
          <span>Engine:</span> {engine}
        </div>
        <div className="item item--combustible">
          <span>Combustible:</span> {combustible}
        </div>
        <div className="item item--color">
          <span>Color:</span> {color}
        </div>
        <div className="item item--price">
          <span>Price:</span> {price} Euro
        </div>
      </div>
    );
  }
}
