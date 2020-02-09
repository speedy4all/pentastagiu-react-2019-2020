import React, { Component } from 'react';

import LocalContext from './context';
import * as list from './store';


Array.prototype.getRandomItem = function () {
    return this[Math.floor(Math.random() * this.length)];
}

class AppStore extends Component {

    constructor(props) {
        super(props);

        this.state = {
            header: {
                title: "Car Shop",
                links: [
                    { name: 'Cars', path: '/cars'},
                    { name: 'Cart', path: '/cart'},
                    { name: 'Settings', path: '/settings'}
                ]
            },
            cars: [],
            loadingCars: true,
            currency: '€',
            cartItems: [],
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

    changeCurrency = event => {
        this.setState({ currency: event.target.value });
    }

    currentDate = () => {
        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        
        return `${dd}/${mm}/${yyyy}`;
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

    render(){
        return (
            <LocalContext.Provider 
                value={{
                    ...this.state,
                    changeCurrency: this.changeCurrency,
                    addCartItem: this.addCartItem,
                    increaseCartItemProduct: this.increaseCartItemProduct,
                    decreaseCartItemProduct: this.decreaseCartItemProduct,
                    deleteCartItem: this.deleteCartItem
                }}
            >
                {
                    this.props.children
                }
            </LocalContext.Provider>
        );
    }
}

export default AppStore;