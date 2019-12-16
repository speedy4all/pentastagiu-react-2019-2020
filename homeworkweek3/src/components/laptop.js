import React, { Component } from "react";

class Laptop extends Component {
  render() {
    const { name, description, color, price } = this.props;

    return (
      <div className="card mb-2" style={{ width: "18rem" }}>
        <div className="card-header text-warning text-center font-weight-bold">
          {name}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item font-italic">{description}</li>
          <li className="list-group-item">{color}</li>
          <li className="list-group-item">{price}</li>
        </ul>
      </div>
    );
  }
}

export default Laptop;
