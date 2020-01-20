import * as React from "react";

export class CartItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.peak !== this.props.peak ||
      nextProps.county !== this.props.county ||
      nextProps.cottage !== this.props.cottage ||
      nextProps.countItem !== this.props.countItem
    );
  }
  componentDidUpdate() {
    console.log("randare cartItem");
  }
  render() {
    return (
      <div className="cart-item">
        <span>{this.props.peak} |</span>
        <span>{this.props.county} |</span>
        <span>
          {this.props.cottage ? this.props.cottage : "There is no cottage!"}
        </span>
        <span>Nr. {this.props.countItem}</span>
        <button onClick={() => this.props.decrease(this.props.itemId)}>
          -
        </button>
        <button onClick={() => this.props.increase(this.props.itemId)}>
          +
        </button>{" "}
        // it works but it's not good, i'll update it
        <button onClick={() => this.props.remove(this.props.itemId)}>x</button>
      </div>
    );
  }
}
