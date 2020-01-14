import React, { Component } from "react";
import Laptop from "../laptop/laptop";

class Laptops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laptops: [],
      refurbishedLaptops: []
    };
  }
  componentDidMount() {
    this.setState({
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
      ],
      refurbishedLaptops: [
        {
          id: 1,
          name: "Dell",
          description: "business laptop",
          color: "yellow",
          price: "200 Euro"
        },
        {
          id: 2,
          name: "Dell",
          description: "business laptop",
          color: "yellow",
          price: "185 Euro"
        },
        {
          id: 3,
          name: "Dell",
          description: "business laptop",
          color: "yellow",
          price: "211 Euro"
        }
      ]
    });
  }
  render() {
    const { laptops, refurbishedLaptops } = this.state;
    return (
      <div>
        <div className="row">
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
        <div className="row">
          {refurbishedLaptops.map(refurbished => (
            <Laptop
              key={refurbished.id}
              name={refurbished.name}
              description={refurbished.description}
              color={refurbished.color}
              price={refurbished.price}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Laptops;
