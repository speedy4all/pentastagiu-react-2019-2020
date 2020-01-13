import React, { Component } from "react";
import CarBoxHeader from "../CarBoxHeader";
import logo from "./car-logo.png";
import CarBoxList from "../CarBoxList";
import "./CarBox.css";

export default class CarBox extends Component {
  render() {
    return (
      <div className="carBox">
        <CarBoxHeader title="Cars" logo={logo} />
        <CarBoxList />
      </div>
    );
  }
}
