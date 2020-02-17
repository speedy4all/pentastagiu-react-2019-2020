import React, {useContext, useEffect} from "react";
import CartItem from "../cart-item/cart-item";
import Spinner from "../spinner";

import "./cart-list.css";
import {AppContext} from "../context/context";

const CartList = (props) => {
    const {cartItems, cartItemsLoaded, themeColor, cleanCart, incrementQuantity, decrementQuantity, deleteFromCart} = useContext(AppContext);
    useEffect(() => {
    }, [cartItems]);

    const renderCartList = () => {
        if (cartItems.length > 0) {

            return cartItems.map((car, index) => (
                <CartItem
                    key={car.id}
                    id={car.id}
                    row={index}
                    name={car.name}
                    engine={car.engine}
                    combustible={car.combustible}
                    color={car.color}
                    price={car.price}
                    quantity={car.quantity}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                    deleteFromCart={deleteFromCart}
                />
            ));

        } else {
            return <tr><td colSpan="7" style={{textAlign: 'center'}}>Empty cart</td></tr>
        }
    };

    if (!cartItemsLoaded) return <Spinner/>;
    return (<div className="cart-list">
        <table className={`table table-striped ${themeColor}`}>
            <thead>
            <tr>
                <th scope="col">#ID</th>
                <th scope="col">Name</th>
                <th scope="col">Engine</th>
                <th scope="col">Combustible</th>
                <th scope="col">Color</th>
                <th scope="col">Price</th>
                <th scope="col">Action {(cartItems.length > 0) ? (
                    <div className="btn btn-danger btn-clean" onClick={cleanCart}>Clean Cart</div>) : undefined} </th>
            </tr>
            </thead>
            <tbody>
            {renderCartList()}
            </tbody>
        </table>
    </div>);
};

export default CartList;

