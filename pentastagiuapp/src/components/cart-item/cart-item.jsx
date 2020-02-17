import React, {useContext, useEffect} from "react";
import "./cart-item.css";

import {AppContext} from "../context/context";

const CartItem = (props) => {
    const {currency} = useContext(AppContext);

    const {id, row, name, engine, combustible, color, price, quantity, decrementQuantity, incrementQuantity, deleteFromCart} = props;

    useEffect(()=>{},[id,row,name,engine,combustible,color,price,quantity]);

    return (
        <tr>
            <th scope="row">{row}</th>
            <td>{name}</td>
            <td>{engine}</td>
            <td>{combustible}</td>
            <td>{color}</td>
            <td>{price} {currency}</td>
            <td className="cart-item__action">
                <div className="quantity">
                    <div className="btn btn-danger" onClick={() => decrementQuantity(id)}>
                        <i className="fa fa-minus"aria-hidden="true"></i>
                    </div>
                    <span className="quantity-number">{quantity}</span>
                    <div className="btn btn-success" onClick={() => incrementQuantity(id)}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                </div>
                <button type="button" className="btn btn-danger" onClick={() => deleteFromCart(id)}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </td>
        </tr>
    );
};

export default CartItem;

