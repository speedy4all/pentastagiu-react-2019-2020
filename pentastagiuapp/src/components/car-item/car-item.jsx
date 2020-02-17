import React, {useContext} from "react";
import "./car-item.css";

import {LocalContext} from "../context/context";

const CarItem = (props) => {
    const {currency} = useContext(LocalContext);

    const {id, row, name, engine, combustible, color, price, addToCart} = props;
    return (
        <tr>
            <th scope="row">{row}</th>
            <td>{name}</td>
            <td>{engine}</td>
            <td>{combustible}</td>
            <td>{color}</td>
            <td>{price} {currency}</td>
            <td>
                <button type="button" className="btn btn-success" onClick={() => addToCart(id)}>
                    <i className="fa fa-cart-plus"></i>
                </button>
            </td>
        </tr>
    );
};

export default CarItem;
