import React from 'react';

export default class CartItem extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.brand !== this.props.brand ||
        nextProps.model !== this.props.model ||
        nextProps.color !== this.props.color ||
        nextProps.price !== this.props.price ||
        nextProps.counter !== this.props.counter
    }
    
    
    render() {
        // console.log(this.props.counter);
        return(
            <div className="cart-item">
                <span>Brand: {this.props.brand} </span>
                <span>Model: {this.props.model} </span>
                <span>Color: {this.props.color} </span>
                <span>Price: {this.props.price} Euro</span>
                <span className="badge badge-primary counter"> {this.props.counter} </span>
                <span className="delete-button" onClick={this.props.removeFromCart.bind(this, this.props.cartId)} >&times;</span>
            </div>
        );
    }
}