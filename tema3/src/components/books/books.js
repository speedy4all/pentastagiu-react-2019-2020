import React from 'react';
import './books.css';



export class Books extends React.Component{
    
    render() {
        return (
            <div className='books-items'>
              <img src={this.props.imageUrl} alt=''/>
              <span>{this.props.title}</span>
              <span>{this.props.author}</span>
              <span>Price: {this.props.price} EUR</span>
              <button>Add to cart</button>
              <button id='wishlist'>Wishlist</button>
            </div>
        );
    }
}