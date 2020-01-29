import React, {Component} from 'react';
import {Books} from '../books/books';

export default class Booklist extends Component {
    render(){
        const{books, addToCart,addToWishlist} = this.props;
        return books.map(book => 
        <Books 
            addBookToCart={addToCart} 
            key={book.title+'1'} 
            bookId = {book.id} 
            imageUrl={book.imageUrl} 
            title={book.title} 
            author={book.author} 
            price={book.price}
            addToWishlist={addToWishlist}
        />
        
        )
    }
}