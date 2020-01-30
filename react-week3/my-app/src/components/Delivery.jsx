import React from "react";

export class Delivery extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.giftName !== this.props.giftName ||
      nextProps.edition !== this.props.edition ||
      nextProps.price !== this.props.price ||
      (nextProps.count && nextProps.count !== this.props.count)
    );
  }

  render() {
    return (
      <div className="cart-item">
        <span>
          <b>{this.props.count}x</b> {this.props.giftName} |{" "}
          {this.props.edition}
        </span>
        <span>{this.props.price}RON </span> <span>{this.props.delivery}</span>
        <span>
          <button onClick={() => this.props.add(this.props.itemId)}>+</button>
          <button onClick={() => this.props.decreaseCount(this.props.itemId)}>
            -
          </button>
          <button onClick={() => this.props.remove(this.props.itemId)}>
            X
          </button>
        </span>
      </div>
    );
  }
}
