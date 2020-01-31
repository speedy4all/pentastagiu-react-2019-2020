import React, { Component } from "react";
import { ThemeContext } from "../../context";

class CartItem extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.name !== this.props.name ||
      nextProps.description !== this.props.description ||
      nextProps.color !== this.props.color ||
      nextProps.price !== this.props.price ||
      (nextProps.count && nextProps.count !== this.props.count) ||
      nextProps.type !== this.props.type ||
      nextProps.theme !== this.props.theme
    );
  }
  render() {
    //console.log(this.props);
    const { name, description, color, price, itemId, count, type } = this.props;
    return (
      <ThemeContext.Consumer>
        {themeValue => (
          <div
            className={`card mx-2 my-2 ${themeValue.theme}`}
            style={{ width: "18vw" }}
          >
            <div className="card-header d-flex flex-row text-warning justify-content-between font-weight-bold">
              {name}
              <div className="p-0 mx-0">
                <button
                  onClick={() => this.props.removeFromCart(itemId)}
                  className="btn btn-danger btn-sm"
                >
                  x
                </button>
              </div>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item font-italic">{description}</li>
              <li className="list-group-item">{color}</li>
              <li className="list-group-item">{price}</li>
              <li className="list-group-item">{type}</li>
            </ul>
            <div className="d-flex flex-row justify-content-center">
              <button
                onClick={() => this.props.add(itemId)}
                className="btn btn-danger btn-sm"
              >
                +
              </button>
              <span className="badge badge-pill badge-warning mx-2 my-2">
                {count}
              </span>
              <button
                onClick={() => this.props.decreaseCount(itemId)}
                className="btn btn-danger btn-sm"
              >
                -
              </button>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default CartItem;
