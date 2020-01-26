import React, {Component} from "react";
import "./car-item.css";

import {LocalContext} from "../context/context";

export default class CarItem extends Component {
    static contextType = LocalContext;

    render() {
        const {id, row, name, engine, combustible, color, price, addToCart} = this.props;
        return (
            <tr>
                <th scope="row">{row}</th>
                <td>{name}</td>
                <td>{engine}</td>
                <td>{combustible}</td>
                <td>{color}</td>
                <td>{price} {this.context.currency}</td>
                <td>
                    <button type="button" className="btn btn-success" onClick={() => addToCart(id)}><i
                        className="fa fa-cart-plus"></i></button>
                </td>
            </tr>
        );
    }
}
