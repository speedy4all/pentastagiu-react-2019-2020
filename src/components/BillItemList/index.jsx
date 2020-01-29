import React, { Component } from "react";
import BillItem from "../BillItem";

export default class BillItemList extends Component {
  render() {
    const { items, addToCart } = this.props;
    return items.map(item => (
      <BillItem
        key={item.id}
        addToCart={addToCart}
        itemId={item.id}
        movieTitle={item.movieTitle}
        price={item.price}
        date={item.date}
      />
    ));
  }
}