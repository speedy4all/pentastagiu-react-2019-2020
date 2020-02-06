import React, { Component } from 'react';

import CartItem from './CartItem/CartItem.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import LocalContext from '../../context';


class Cart extends Component {

    static contextType = LocalContext;

    showCartItems = () => {
        return this.context.cartItems.map(item => <CartItem 
                key={ item.id } 
                { ...item } 
                increaseCartItemProduct={this.context.increaseCartItemProduct}
                decreaseCartItemProduct={this.context.decreaseCartItemProduct}
            />);
    }

    render(){

        const cartItems = this.showCartItems();

        let html = cartItems.length > 0 ? cartItems : <h5>There is no item in the cart.</h5>;

        if(this.context.loadingCartItems){
            html = <Spinner />
        }

        return html;
    }
}

export default Cart;