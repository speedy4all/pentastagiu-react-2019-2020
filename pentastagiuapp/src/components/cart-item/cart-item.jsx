import React, {Component} from "react";
import "./cart-item.css";

export default class CartItem extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.id !== this.props.id ||
            nextProps.row !== this.props.row ||
            nextProps.name !== this.props.name ||
            nextProps.engine !== this.props.engine ||
            nextProps.combustible !== this.props.combustible ||
            nextProps.color !== this.props.color ||
            nextProps.price !== this.props.price ||
            nextProps.quantity !== this.props.quantity
    }

    render() {
        const {id, row, name, engine, combustible, color, price, quantity, decrementQuantity, incrementQuantity, deleteFromCart} = this.props;
        return (
            <tr>
                <th scope="row">{row}</th>
                <td>{name}</td>
                <td>{engine}</td>
                <td>{combustible}</td>
                <td>{color}</td>
                <td>{price} Euro</td>
                <td className="cart-item__action">
                    <div className="quantity">
                        <div className="btn btn-danger" onClick={() => decrementQuantity(id)}><i className="fa fa-minus"
                                                                                                 aria-hidden="true"></i>
                        </div>
                        <span className="quantity-number">{quantity}</span>
                        <div className="btn btn-success" onClick={() => incrementQuantity(id)}><i className="fa fa-plus"
                                                                                                  aria-hidden="true"></i>
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger" onClick={() => deleteFromCart(id)}><i
                        className="fa fa-trash-o" aria-hidden="true"></i></button>
                </td>
            </tr>
        );
    }
}
