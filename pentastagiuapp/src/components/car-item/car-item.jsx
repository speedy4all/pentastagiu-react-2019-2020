import React, {Component} from "react";
import "./car-item.css";

export default class CarItem extends Component {
    render() {
        const {id, row, name, engine, combustible, color, price, addToCart} = this.props;
        return (
            <tr>
                <th scope="row">{row}</th>
                <td>{name}</td>
                <td>{engine}</td>
                <td>{combustible}</td>
                <td>{color}</td>
                <td>{price} Euro</td>
                <td>
                    <button type="button" className="btn btn-success" onClick={()=>addToCart(id)}><i className="fa fa-cart-plus"></i></button>
                </td>
            </tr>
        );
    }
}
