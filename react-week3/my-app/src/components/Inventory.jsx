import React from "react";

export default class Inventory extends React.Component {
  /*
        {
            giftName: string,
            edition: string,
            price: number,
        }
    */

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.giftName !== this.props.giftName ||
      nextProps.edition !== this.props.edition ||
      nextProps.price !== this.props.price
    );
  }

  render() {
    return (
      <div className="item">
        <span>
          Toy: <b>{this.props.giftName}</b>
        </span>
        <span>Edition: {this.props.edition}</span>
        <span>Price: {this.props.price}RON</span>
        <button onClick={() => this.props.addToCart(this.props.itemId)}>
          Add to cart
        </button>
      </div>
    );
  }
}
