import React, {useContext} from "react";
import AppHeader from "../app-header";
import BoxList from "../box-list";
import CartList from "../cart-list";

import {ThemeContext, LocalContext, AppContext} from "../context/context";

import logo from "./car-logo.png";

const App = () => {
    const {
        themeColor,
        currency,
        cars,
        carsLoaded,
        changeThemeColor,
        changeCurrency,
        cartItems,
        cartItemsLoaded,
        cleanCart,
        incrementQuantity,
        decrementQuantity,
        deleteFromCart,
        addToCart
    } = useContext(AppContext);

    return (
        <ThemeContext.Provider
            value={{
                themeColor,
                changeThemeColor: changeThemeColor,
                changeCurrency: changeCurrency
            }}>
            <div className="app">
                <div className="card">
                    <div className="card-header">
                        <AppHeader title="Cars" logo={logo}/>
                    </div>
                    <LocalContext.Provider value={{currency}}>
                        <div className="box-container">
                            <CartList cartItems={cartItems} cartItemsLoaded={cartItemsLoaded}
                                      cleanCart={cleanCart}
                                      incrementQuantity={incrementQuantity}
                                      decrementQuantity={decrementQuantity}
                                      deleteFromCart={deleteFromCart}/>
                        </div>
                        <div className="cart-container">
                            <BoxList cars={cars} carsLoaded={carsLoaded}
                                     addToCart={addToCart}/>
                        </div>
                    </LocalContext.Provider>
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
