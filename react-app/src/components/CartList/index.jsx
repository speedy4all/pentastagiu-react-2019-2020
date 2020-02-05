import React from 'react';
import {useContex} from 'react';
import {AppContext} from '../../context';
import {CartItem} from '../CartItem';

export default function CartList() {
    const appContext = useContex(AppContext);

    return appContext.cartList.map((cartItem, index) => (
        <CartItem
           key={`${cartItem.id} - ${index}`}
           remove={appContext.removeFromCart}
           itemId={cartItem.id}
           name={cartItem.name}
           age={cartItem.age}
           price={cartItem.price}
           language={appContext.language}
        />
    ));
}