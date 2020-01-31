import React, { Component } from "react";
import Laptop from "../laptop/laptop";

class LaptopList extends Component {
  render() {
    const { items, addToCart } = this.props;
    return items.map(item => (
      <Laptop
        className="col-sm-6"
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
