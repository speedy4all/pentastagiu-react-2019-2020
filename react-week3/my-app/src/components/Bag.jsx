import React from "react";

export class Bag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sack-item">
        <span>{this.props.name}</span>
        <span>Price: {this.props.price}</span>
        <span>{this.props.edition ? this.props.edition : "no edition found"}</span>
        <span>{this.props.paper ? this.props.paper : "no paper"}</span>
        <span>Free Delivery</span>
        <button>Add to bag</button>
      </div>
    );
  }
}
