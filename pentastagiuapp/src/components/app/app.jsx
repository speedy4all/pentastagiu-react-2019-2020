import React, {Component} from "react";
import AppHeader from "../app-header";
import BoxList from "../box-list";
import CartList from "../cart-list";

import logo from "./car-logo.png";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            cars: [],
            carsLoaded: false,
            cartItems: [],
            cartItemsLoaded: false,
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
                        price: "1000",
                        quantity: 1
                    },
                    {
                        id: 2,
                        name: "Bmw",
                        engine: "3.0",
                        combustible: "benzine",
                        color: "blue",
                        price: "1000",
                        quantity: 1
                    },
                    {
                        id: 3,
                        name: "Mercedes",
                        engine: "2.2",
                        combustible: "benzine",
                        color: "silver",
                        price: "1000",
                        quantity: 1
                    },
                    {
                        id: 4,
                        name: "Opel",
                        engine: "2",
                        combustible: "disel",
                        color: "white",
                        price: "1000",
                        quantity: 1
                    },
                    {
                        id: 5,
                        name: "Porsche",
                        engine: "3.0",
                        combustible: "benzine",
                        color: "red",
                        price: "1000",
                        quantity: 1
                    }
                ],
                carsLoaded: true,
                cartItems: [],
                cartItemsLoaded: true,

            });
        }, 500);
    }

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
            const itemToAdd =  Object.assign({}, this.state.cars.find(({id}) => id === itemId));

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
    }


    render() {
        return (
            <div className="app">
                <div className="card">
                    <div className="card-header">
                        <AppHeader title="Cars" logo={logo}/>
                    </div>
                    <div className="box-container">
                        <CartList cartItems={this.state.cartItems} cartItemsLoaded={this.state.cartItemsLoaded}
                                  incrementQuantity={this.incrementQuantity} decrementQuantity={this.decrementQuantity}
                                  deleteFromCart={this.deleteFromCart}/>
                    </div>
                    <div className="cart-container">
                        <BoxList cars={this.state.cars} carsLoaded={this.state.carsLoaded} addToCart={this.addToCart}/>
                    </div>
                </div>
            </div>
        );
    }
}
