import React, { useContext } from "react";
import { AppContext } from "../../context";
import { CartItem } from "../CartItem";

export default function CartList() {
  const appContext = useContext(AppContext);

  return appContext.cartList.map((cartItem, index) => (
    <CartItem
      key={`${cartItem.id}-${index}`}
      remove={appContext.removeFromCart}
      add={appContext.addToCart}
      decreaseCount={appContext.removeOneFromCart}
      itemId={cartItem.id}
      movieTitle={cartItem.movieTitle}
      price={cartItem.price}
      date={cartItem.date}
      count={cartItem.count}
      language={appContext.language}
    />
  ));
}
