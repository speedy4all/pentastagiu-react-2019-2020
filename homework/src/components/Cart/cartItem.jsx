import React from 'react';

export default class CartItem extends React.Component {

    render() {
        return(
            <div className="cart-item">
                <span>Brand: {this.props.brand}</span>
                <span>Model: {this.props.model}</span>
                <span>Color: {this.props.color}</span>
                <span>Price: {this.props.price} Euro</span>
            </div>
        );
    }
}