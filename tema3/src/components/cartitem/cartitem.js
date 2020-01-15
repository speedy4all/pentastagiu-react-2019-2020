import React from 'react';
import './cart.css';



export class Cart extends React.Component{
    
    render() {
        return (
            <div className='cart-container'>
              <span>{this.props.title} - {this.props.author}</span>
              <span>&#9733;</span>
              <span>Price: {this.props.price} EUR</span>
            </div>
        );
    }
}