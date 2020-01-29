import React, { Component } from "react";
import BillItem from "../BillItem";
import { AppContext } from "../../context";

export default class BillItemList extends Component {
  static contextType = AppContext;

  render() {
    return (
      <div className="list-container">
        {this.context.itemList.map(item => (
          <BillItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    );
  }
}
