import React, { useContext } from "react";
import { AppContext } from "../../Context/context";
import { CartItem } from "../cartItem"

export default function CartList() {
    const appContext = useContext(AppContext)
    return (
      <div>
        <h1>Cos cumparaturi</h1>
        {appContext.cartList.map((cartItem, index) => (
          <CartItem
            remove={appContext.removeFromCart}
            decrease={appContext.decrease}
            increase={appContext.addToCart}
            key={`${cartItem.id}-${index}`}
            itemId={cartItem.id}
            {...cartItem}
            // peak={cartItem.peak}
            // county={cartItem.county}
            // cottage={cartItem.cottage}
            // countItem={cartItem.countItem} // nr. de trips
            // language={appContext.language}
          />
        ))}
      </div>
    );
}
