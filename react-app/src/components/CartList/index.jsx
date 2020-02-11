import React, {useContext} from 'react';
import { AppContext } from '../../context';
import { CartItem } from '../CartItem';

export default function CartList() {
    const appContext = useContext(AppContext);

    return appContext.cartList.map((cartItem, index) => (
        <CartItem
           key={`${cartItem.id} - ${index}`}
           add={appContext.addToCart}
           decreaseCount={appContext.removeOneFromCart}
           remove={appContext.removeFromCart}
           itemId={cartItem.id}
           name={cartItem.name}
           age={cartItem.age}
           price={cartItem.price}
           count={cartItem.count}
           language={appContext.language}
        />
    ));
}