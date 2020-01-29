import React from 'react';
import './App.css';
import {Header} from './components/header/header';
import {Books} from './components/books/books';
import {Loader} from './components/loader/loader';
import { Cart } from './components/cartitem/cartitem';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bookList:[],
      cartList:[],
      loader1: false,
      loader2: false

    }

  }

  componentDidMount(){
    setTimeout(() => {
        this.setState({
          /*receiving values for bookList props*/
          bookList: [
            {id: 1, imageUrl: require('./images/dostoievski.jpg'), title:'Demons', author:'Dostoievski', price:10},
            {id: 2, imageUrl: require('./images/fowles.jpg'), title:'The magus', author:'Fowles', price: 9},
            {id: 3, imageUrl: require('./images/germany.jpg'), title:'Germany in WW2', author:'Jan Kershaw', price: 21},
            {id: 4,imageUrl: require('./images/marquez.jpg'), title:'One Hundred Years', author:'G. Marquez', price:11},
            {id: 5, imageUrl: require('./images/simpson.jpg'), title:'You dont Know JS', author:'Kyles Simpson', price:18}
          ],
          loader1:true

      });
    },2000);

    setTimeout(()=>{
         this.setState({
          /*receiving values for cartList props*/
          cartList:[],
          loader2:true
        });
    }, 3000);
  
  }
  renderBooks =()=> this.state.bookList.map(book => {
  return <Books 
  addBookToCart={this.addToCart} 
  key={book.title+'1'} 
  bookId = {book.id} 
  imageUrl={book.imageUrl} 
  title={book.title} 
  author={book.author} 
  price={book.price}
  />
  });

  renderCart =()=> this.state.cartList.map(cart => {
  return <Cart 
  remove={this.removeFromCart} 
  add={this.addToCart} 
  decreaseCount={this.removeBookFromCart}
  key={cart.title +'2'} 
  bookId={cart.id} 
  title={cart.title} 
  author={cart.author} 
  price={cart.price} 
  count={cart.count}
  />
  });

  removeFromCart = (bookId)=>{
    const cartUpdated = this.state.cartList.filter(item =>item.id !== bookId );
    this.setState({cartList:cartUpdated});
  }

  addToCart = (bookId) => {
  
    const bookToAdd = this.state.bookList.find(item => item.id === bookId);
    if (!bookToAdd){
      return undefined;
    }
      const cartUpdate = this.state.cartList.slice();
      const bookAlreadyAdded = cartUpdate.find(item =>item.id === bookId);

      if(bookAlreadyAdded){
         bookAlreadyAdded.count++;
      }else {
        const newBook = Object.assign({}, bookToAdd);
        newBook.count = 1;
        cartUpdate.push(newBook);
      }
      this.setState({cartList: cartUpdate});
    }
    

  removeBookFromCart = (bookId)=>{
    let cartUpdated = this.state.cartList.slice();
    const bookToRemove = cartUpdated.find(item => item.id === bookId);

    if(bookToRemove && bookToRemove.count === 1){
      cartUpdated = cartUpdated.filter(item => item.id !== bookId);
    } else {
      bookToRemove.count = bookToRemove.count -1;
    }
    this.setState({cartList: cartUpdated});
  }

  cleanCart = () => {
    this.setState({
      cartList : []
    });
  }

  render(){
   if (!this.state.loader1 && !this.state.loader2)
   return (
        <div className="App">
          <Header name='Home'wish='Wishlist' itemcart='Cart'/>
          <Loader/>
          <Loader/>
        </div>);
    if (this.state.loader1 && !this.state.loader2)
    return (
        <div className="App">
          <Header name='Home'wish='Wishlist' itemcart='Cart'/>
          <div className='books-container'>
          {this.renderBooks()}
          </div>
          <Loader/>
        </div>
    );
    else 
    return(
        <div className="App">
          <Header name='Home'wish='Wishlist' itemcart='Cart'/>
          <div className='books-container'>
          {this.renderBooks()}
          </div>
          
          <div className='cart-render'>
          {this.renderCart()}
          <button onClick={this.cleanCart} className='remove'>Remove from cart</button>
          </div>
        </div>);
  }
}



