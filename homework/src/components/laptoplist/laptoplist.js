import React, { Component } from "react";
import Laptop from "../laptop/laptop";
import { AppContext } from "../../context";

class LaptopList extends Component {
  static contextType = AppContext;
  render() {
    const { addToCart } = this.context;
    return this.context.laptops.map(item => (
      <Laptop
        addToCart={addToCart}
        key={item.id}
        itemId={item.id}
        name={item.name}
        description={item.description}
        color={item.color}
        price={item.price}
      />
    ));
  }
}

export default LaptopList;
