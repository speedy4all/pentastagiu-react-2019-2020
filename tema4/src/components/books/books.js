import React from 'react';
import './books.css';



export class Books extends React.Component{
    shouldComponentUpdate(nextProps){
        if (nextProps.imageUrl !== this.props.imageUrl ||
            nextProps.title !== this.props.title ||
            nextProps.author !== this.props.author ||
            nextProps.price !== this.props.price
        ) {
            return true
        }
        return false
    }
  
    render() {
        return (
            <div className='books-items'>
              <img src={this.props.imageUrl} alt=''/>
              <span>{this.props.title}</span>
              <span>{this.props.author}</span>
              <span>Price: {this.props.price} EUR</span>
              <button onClick={() => this.props.addBookToCart(this.props.bookId)}>Add to cart</button>
              <button id='wishlist'>Wishlist</button>
            </div>
        );
    }
}