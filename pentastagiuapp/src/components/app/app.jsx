import React, {Component} from "react";
import AppHeader from "../app-header";
import BoxList from "../box-list";
import CartList from "../cart-list";

import {ThemeContext, LocalContext} from "../context/context";

import logo from "./car-logo.png";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            cars: [],
            carsLoaded: false,
            cartItems: [],
            cartItemsLoaded: false,
            currency: '',
            themeColor: ''
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                cars: [
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
                ],
                carsLoaded: true,
                cartItems: [],
                cartItemsLoaded: true,
                currency: 'EURO',
                themeColor: 'table-dark'
            });
        }, 500);
    }

    cleanCart = () => {
        this.setState({
            cartItems: []
        });
    };

    addToCart = (itemId) => {
        const dublicateId = this.state.cartItems.find(({id}) => id === itemId);

        if (dublicateId !== undefined) {
            const cartItems = [...this.state.cartItems];
            const index = cartItems.findIndex(item => itemId === item.id);
            cartItems[index].quantity++;

            this.setState({
                cartItems: cartItems
            })

        } else {
            const itemToAdd = Object.assign({}, this.state.cars.find(({id}) => id === itemId));

            this.setState({
                cartItems: [...this.state.cartItems, itemToAdd]
            })
        }
    };

    deleteFromCart = (itemId) => {
        const cartItems = this.state.cartItems.filter(({id}) => id !== itemId);

        this.setState({
            cartItems: cartItems
        });

    };

    incrementQuantity = (itemId) => {
        const cartItems = [...this.state.cartItems];
        const index = cartItems.findIndex(item => itemId === item.id);
        cartItems[index].quantity++;

        this.setState({cartItems: cartItems});
    };

    decrementQuantity = (itemId) => {
        const cartItems = [...this.state.cartItems];
        const index = cartItems.findIndex(item => itemId === item.id);

        if (cartItems[index].quantity > 1) {
            cartItems[index].quantity--;
        }

        this.setState({cartItems: cartItems});
    };

    changeThemeColor = (color) => {
        this.setState({
            themeColor: color
        })
    };

    changeCurrency = (value) => {
        const {currency: previousCurrency } = this.state;
        const {cars, cartItems} = this.state;
        let newValueCars = [...cars];
        let newValueCart = [...cartItems];
        let newCarsArray = [];
        let newCartArray = [];

        if (value!==previousCurrency) {
            switch (value) {
                case 'RON':
                    newValueCars.map(car => {
                        car.price = car.price * 4.7;
                    });
                    newValueCart.map(car => {
                        car.price = car.price * 4.7;
                    });
                    break;
                case 'EURO':
                    newValueCars.map(car => {
                        car.price = car.price / 4.7;
                    });
                    newValueCart.map(car => {
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


        this.setState({
            cars: newCarsArray,
            cartItems: newCartArray,
            currency: value
        })
    };


    render() {
        const {themeColor, currency} = this.state;

        return (
            <ThemeContext.Provider
                value={{
                    themeColor,
                    changeThemeColor: this.changeThemeColor,
                    changeCurrency: this.changeCurrency
                }}>
                <div className="app">
                    <div className="card">
                        <div className="card-header">
                            <AppHeader title="Cars" logo={logo}/>
                        </div>
                        <LocalContext.Provider value={{currency}}>
                            <div className="box-container">
                                <CartList cartItems={this.state.cartItems} cartItemsLoaded={this.state.cartItemsLoaded}
                                          cleanCart={this.cleanCart}
                                          incrementQuantity={this.incrementQuantity}
                                          decrementQuantity={this.decrementQuantity}
                                          deleteFromCart={this.deleteFromCart}/>
                            </div>
                            <div className="cart-container">
                                <BoxList cars={this.state.cars} carsLoaded={this.state.carsLoaded}
                                         addToCart={this.addToCart}/>
                            </div>
                        </LocalContext.Provider>
                    </div>
                </div>
            </ThemeContext.Provider>
        );
    }
}
