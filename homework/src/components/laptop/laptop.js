import React, { Component } from "react";

class Laptop extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.name !== this.props.name ||
      nextProps.description !== this.props.description ||
      nextProps.color !== this.props.color ||
      nextProps.price !== this.props.price
    );
  }
  render() {
    const { name, description, color, price, addToCart } = this.props;

    return (
      <div className="card mx-2 my-2" style={{ width: "18vw" }}>
        <div className="card-header text-warning text-center font-weight-bold">
          {name}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item font-italic">{description}</li>
          <li className="list-group-item">{color}</li>
          <li className="list-group-item ">{price}</li>
        </ul>
        <button
          onClick={() => addToCart(this.props.itemId)}
          type="button"
          className="btn btn-secondary btn-sm btn-block"
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

export default Laptop;
