import React, { useContext } from "react";
import { AppContext } from "../../Context/context";
import { CartItem } from "../cartItem"

export default function CartList() {
    const appContext = useContext(AppContext)
    return (
      <div>
        {appContext.cartList.map((cartItem, index) => (
          <CartItem
            remove={appContext.removeFromCart}
            decrease={appContext.decrease}
            increase={appContext.addToCart}
            key={`${cartItem.id}-${index}`}
            itemId={cartItem.id} // id-ul unic
            peak={cartItem.peak}
            county={cartItem.county}
            cottage={cartItem.cottage}
            countItem={cartItem.countItem} // nr. de trips
            language={appContext.language}
          />
        ))}
      </div>
    );
}
