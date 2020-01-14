import React, { Component } from 'react';

import CartItem from './CartItem/CartItem.jsx';
import Spinner from '../Spinner/Spinner.jsx';


class Cart extends Component {

    constructor(props){
        super(props);

        this.state = {
            cartItems: [],
            loading: true
        };
    }

    componentDidMount(){
        const items = [
            {
                id: 1,
                product: 'Dacia, Logan',
                price: 13500,
                date: '11/09/2019',
                customer: 'Bogdan Popescu',
                address: 'Romania, Brasov',
                color: 'primary'
            },
            {
                id: 2,
                product: 'Opel, Astra',
                price: 21300,
                date: '04/01/2020',
                customer: 'Elena Maria',
                address: 'Romania, Iasi',
                color: 'danger'
            },
            {
                id: 3,
                product: 'Ford, Fiesta',
                price: 23700,
                date: '15/02/2020',
                customer: 'Cristina Anton',
                address: 'Romania, Sibiu',
                color: 'success'
            }
        ];

        setTimeout(() => {
            this.setState({ cartItems: items, loading: false });
        }, 2500);
    }

    showCartItems = () => {
        return this.state.cartItems.map(item => <CartItem key={ item.id } { ...item } />);
    }

    render(){

        let html = this.showCartItems();

        if(this.state.loading){
            html = <Spinner />
        }

        return html;
    }
}

export default Cart;