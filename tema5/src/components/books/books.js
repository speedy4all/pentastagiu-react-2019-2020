import React from 'react';
import './books.css';
import {CurrencyContext, WishlistContext} from '../../context';
import ButtonHover from '../hover/hover';



export class Books extends React.PureComponent{
    /*shouldComponentUpdate(nextProps){
        if (nextProps.imageUrl !== this.props.imageUrl ||
            nextProps.title !== this.props.title ||
            nextProps.author !== this.props.author ||
            nextProps.price !== this.props.price
        ) {
            return true
        }
        return false
    }*/
   /*static contextType = CurrencyContext;*/

    render() {
        
        return (
            <ButtonHover render={(isHover)=>{
                return(<WishlistContext.Consumer>
                {wishlistValue => 
                    <CurrencyContext.Consumer>
                    {currencyValue => (
                    <div className='books-items'>
                    <img src={this.props.imageUrl} alt=''/>
                    <span>{this.props.title}</span>
                    <span>{this.props.author}</span>
                    <span>Price: {this.props.price} {currencyValue.currency}</span>
                    <button id={`${isHover ? "look": ""}`}onClick={() => this.props.addBookToCart(this.props.bookId)}>Add to cart</button>
                    <button onClick={() => this.props.addToWishlist(this.props.bookId)} id='wishlist'>{wishlistValue.wishlist}</button>
                    </div>
                    )}
                   </CurrencyContext.Consumer>
                }
                </WishlistContext.Consumer>
                );
            }}/>
            
               
        );
    }
}