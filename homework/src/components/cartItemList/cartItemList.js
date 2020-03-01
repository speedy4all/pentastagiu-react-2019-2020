import React, { useContext } from "react";
import { AppContext } from "../../context";
import CartItem from "../cartItem/cartitem";

const CartItemList = () => {
  const appContext = useContext(AppContext);
  return appContext.laptopsCart.map((item, index) => (
    <CartItem
      key={`${item.id}-${index}`}
      removeFromCart={appContext.removeFromCart}
      add={appContext.addToCart}
      itemId={item.id}
      name={item.name}
      description={item.description}
      color={item.color}
      price={item.price}
      count={item.count}
      decreaseCount={appContext.removeOneFromCart}
      type={appContext.type}
    />
  ));
};
export default CartItemList;
