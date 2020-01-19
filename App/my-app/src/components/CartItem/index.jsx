import React from 'react';

export default class CartItem extends React.Component {
    constructor(props) {
        super(props);
        CartItem.defaultProps = {
            quantity: 1,
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.id !== this.props.id ||
            nextProps.name !== this.props.name ||
            nextProps.quantity !== this.props.quantity ||
            nextProps.price !== this.props.price;
    }

    render() {
        return (
            <div className="cart-item">
                <span>id: {this.props.id} </span>
                <span>name: {this.props.name} </span>
                <span>price: {this.props.price} </span>
                <span>quantity: {this.props.quantity} </span>
                <button onClick={() => this.props.removeFromCart(this.props.id)}>X</button>
            </div>
        );
    }
}