import React, { Component } from "react";
import Laptop from "./laptop";

class Laptops extends Component {
  constructor() {
    super();
    this.state = {
      laptops: [
        {
          id: 1,
          name: "Acer",
          description: "school laptop",
          color: "red",
          price: "300 Euro"
        },
        {
          id: 2,
          name: "Hp",
          description: "office laptop",
          color: "blue",
          price: "400 Euro"
        },
        {
          id: 3,
          name: "Apple",
          description: "business laptop",
          color: "silver",
          price: "1000 Euro"
        },
        {
          id: 4,
          name: "Trackstor",
          description: "gaming laptop",
          color: "Black",
          price: "900 Euro"
        },
        {
          id: 5,
          name: "Dell",
          description: "business laptop",
          color: "yellow",
          price: "985 Euro"
        }
      ]
    };
  }
  render() {
    const { laptops } = this.state;
    return (
      <div>
        {laptops.map(laptop => (
          <Laptop
            key={laptop.id}
            name={laptop.name}
            description={laptop.description}
            color={laptop.color}
            price={laptop.price}
          />
        ))}
      </div>
    );
  }
}

export default Laptops;
