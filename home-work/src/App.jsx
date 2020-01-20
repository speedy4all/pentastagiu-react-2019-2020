import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header.jsx";
import Cars from "./components/Cars/Cars.jsx";
import Cart from "./components/Cart/Cart.jsx";
import * as list from './store';


Array.prototype.getRandomItem = function () {
    return this[Math.floor(Math.random() * this.length)];
}

class App extends Component {
    constructor() {
        super();

        this.state = {
            header: {
                title: "Cars",
                subtitle: "Cars List"
            },
            cars: [],
            cartItems: [],
            loadingCars: true,
            loadingCartItems: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                cars: list.cars,
                loadingCars: false,
                loadingCartItems: false
            });
        }, 1500);
    }

    currentDate = () => {
        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        
        return `${dd}/${mm}/${yyyy}`;
    }

    addCartItem = carId => {
        const [car] = this.state.cars.filter(car => carId === car.id);
        const lenght = this.state.cartItems.length;
        const id = lenght > 0 ? this.state.cartItems[lenght - 1].id + 1 : 1;
        const customer = list.customers.getRandomItem();

        const item = {
            id: id,
            product: `${car.mark} ${car.model}`,
            price: car.price,
            productPrice: car.price,
            date: this.currentDate(),
            customer: customer.name,
            address: customer.address,
            color: car.color,
            productsNumber: 1
        }

        const newCartItems = [
            item,
            ...this.state.cartItems
        ];
        this.setState({ cartItems: newCartItems });
    }

    increaseCartItemProduct = itemId => {
        const cartItems = [ ...this.state.cartItems ];
        const index = cartItems.findIndex(item => itemId === item.id);
        cartItems[index].price += parseInt(cartItems[index].productPrice);
        cartItems[index].productsNumber++;

        this.setState({ cartItems: cartItems });
    }

    decreaseCartItemProduct = itemId => {
        const cartItems = [ ...this.state.cartItems ];
        const index = cartItems.findIndex(item => itemId === item.id);

        if(cartItems[index].productsNumber < 1){
            this.deleteCartItem(itemId);
            return;
        }

        cartItems[index].price -= parseInt(cartItems[index].productPrice);
        cartItems[index].productsNumber--;

        this.setState({ cartItems: cartItems });
    }

    deleteCartItem = itemId => {
        const cartItems = this.state.cartItems.filter(item => itemId !== item.id);
        this.setState({ cartItems: cartItems });
    }

    render() {
        return (
            <div className="container">
                <Header {...this.state.header} />

                <br />
                <br />

                <div className="row">
                    <div className="col-md-8">
                        <Cars
                            items={this.state.cars}
                            isLoading={this.state.loadingCars}
                            addCartItem={this.addCartItem}
                        />
                    </div>
                    <div className="col-md-4" style={{height: '650px', overflowX: 'auto'}}>
                        <Cart
                            items={this.state.cartItems}
                            isLoading={this.state.loadingCartItems}
                            increaseCartItemProduct={this.increaseCartItemProduct}
                            decreaseCartItemProduct={this.decreaseCartItemProduct}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;