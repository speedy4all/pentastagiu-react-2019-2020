import React, { Component } from 'react';

import CartItem from './CartItem/CartItem.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import cartItem from './CartItem/CartItem.jsx';


class Cart extends Component {

    showCartItems = () => {
        return this.props.items.map(item => <CartItem 
                key={ item.id } 
                { ...item } 
                increaseCartItemProduct={this.props.increaseCartItemProduct}
                decreaseCartItemProduct={this.props.decreaseCartItemProduct}
            />);
    }

    render(){

        const cartItems = this.showCartItems();

        let html = cartItems.length > 0 ? cartItems : <h5>There is no item in the cart.</h5>;

        if(this.props.isLoading){
            html = <Spinner />
        }

        return html;
    }
}

export default Cart;