import React, {useEffect, useState} from 'react';
import {AppContext} from "../context/context";

const AppStore = (props) => {
    const [cars, handleChangeCars] = useState([]);
    const [carsLoaded, handleChangeCarsLoaded] = useState(false);
    const [cartItems, handleChangeCartItems] = useState([]);
    const [cartItemsLoaded, handleChangeCartItemsLoaded] = useState(false);
    const [currency, handleChangeCurrency] = useState('');
    const [themeColor, handleChangeThemeColor] = useState('');

    useEffect(() => {
        setTimeout(() => {
            handleChangeCars([
                {
                    id: 1,
                    name: "Audi",
                    engine: "3.0",
                    combustible: "disel",
                    color: "black",
                    price: 30200,
                    quantity: 1
                },
                {
                    id: 2,
                    name: "Bmw",
                    engine: "3.0",
                    combustible: "benzine",
                    color: "blue",
                    price: 20300,
                    quantity: 1
                },
                {
                    id: 3,
                    name: "Mercedes",
                    engine: "2.2",
                    combustible: "benzine",
                    color: "silver",
                    price: 25650,
                    quantity: 1
                },
                {
                    id: 4,
                    name: "Opel",
                    engine: "2",
                    combustible: "disel",
                    color: "white",
                    price: 2000,
                    quantity: 1
                },
                {
                    id: 5,
                    name: "Porsche",
                    engine: "3.0",
                    combustible: "benzine",
                    color: "red",
                    price: 10700,
                    quantity: 1
                }
            ]);
            handleChangeCarsLoaded(true);
            handleChangeCartItemsLoaded(true);
            handleChangeCurrency('EURO');
            handleChangeThemeColor('table-dark');
        }, 500);
    }, []);


    const cleanCart = () => {
        handleChangeCartItems([]);
    };

    const addToCart = (itemId) => {
        const dublicateId = cartItems.find(({id}) => id === itemId);

        if (dublicateId !== undefined) {
            const newArray = [...cartItems];
            const index = newArray.findIndex(item => itemId === item.id);
            newArray[index].quantity++;

            handleChangeCartItems(newArray);
        } else {
            const itemToAdd = Object.assign({}, cars.find(({id}) => id === itemId));

            handleChangeCartItems([...cartItems, itemToAdd])
        }
    };

    const deleteFromCart = (itemId) => {
        const newArray = cartItems.filter(({id}) => id !== itemId);
        handleChangeCartItems(newArray);
    };

    const incrementQuantity = (itemId) => {
        const newArray = [...cartItems];
        const index = newArray.findIndex(item => itemId === item.id);
        newArray[index].quantity++;

        handleChangeCartItems(newArray);
    };

    const decrementQuantity = (itemId) => {
        const newArray = [...cartItems];
        const index = newArray.findIndex(item => itemId === item.id);

        if (newArray[index].quantity > 1) {
            newArray[index].quantity--;
        }

        handleChangeCartItems(newArray);
    };

    const changeThemeColor = (color) => {
        handleChangeThemeColor(color);
    };

    const changeCurrency = (value) => {
        const previousCurrency = currency;
        let newValueCars = [...cars];
        let newValueCart = [...cartItems];
        let newCarsArray = [];
        let newCartArray = [];

        if (value !== previousCurrency) {
            switch (value) {
                case 'RON':
                    newValueCars.forEach(car => {
                        car.price = car.price * 4.7;
                    });
                    newValueCart.forEach(car => {
                        car.price = car.price * 4.7;
                    });
                    break;
                case 'EURO':
                    newValueCars.forEach(car => {
                        car.price = car.price / 4.7;
                    });
                    newValueCart.forEach(car => {
                        car.price = car.price / 4.7;
                    });
                    break;
                default:
                    newCarsArray = [];
                    newCartArray = [];
            }
        }

        newCarsArray = [...newValueCars];
        newCartArray = [...newValueCart];

        handleChangeCars(newCarsArray);

        handleChangeCartItems(newCartArray);

        handleChangeCurrency(value);
    };

    return (
        <AppContext.Provider
            value={{
                cars,
                carsLoaded,
                cartItems,
                cartItemsLoaded,
                currency,
                themeColor,
                cleanCart,
                addToCart,
                deleteFromCart,
                incrementQuantity,
                decrementQuantity,
                changeThemeColor,
                changeCurrency
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppStore;