import React, { Component } from "react";
import BoxHeader from "../BoxHeader";
import logo from "./car-logo.png";
import BoxList from "../BoxList";
import "./Box.css";

export default class Box extends Component {
  render() {
    return (
      <div className="Box">
        <BoxHeader title="Cars" logo={logo} />
        <BoxList />
      </div>
    );
  }
}
