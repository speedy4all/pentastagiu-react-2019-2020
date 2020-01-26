import React, {Component} from "react";
import CartItem from "../cart-item/cart-item";
import Spinner from "../spinner";

import "./cart-list.css";
import {ThemeContext} from "../context/context";

export default class CartList extends Component {
    static contextType = ThemeContext;

    shouldComponentUpdate(nextProps) {
        return nextProps.cartItems !== this.props.cartItems
    }

    renderCartList = () =>
        this.props.cartItems.map((car, index) => (
            <CartItem
                key = {car.id}
                id={car.id}
                row={index}
                name={car.name}
                engine={car.engine}
                combustible={car.combustible}
                color={car.color}
                price={car.price}
                quantity={car.quantity}
                incrementQuantity = {this.props.incrementQuantity}
                decrementQuantity = {this.props.decrementQuantity}
                deleteFromCart={this.props.deleteFromCart}
            />
        ));

    render() {
        if (!this.props.cartItemsLoaded) return <Spinner/>;
        return (<div className="cart-list">
            <table className={`table table-striped ${this.context.themeColor}`}>
                <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Engine</th>
                    <th scope="col">Combustible</th>
                    <th scope="col">Color</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action {(this.props.cartItems.length>0)?(<div className="btn btn-danger btn-clean" onClick={this.props.cleanCart} >Clean Cart</div>):undefined} </th>
                </tr>
                </thead>
                <tbody>
                {this.renderCartList()}
                </tbody>
            </table>
        </div>);
    }
}

