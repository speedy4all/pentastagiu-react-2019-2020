import React from 'react';
import './App.css';
import {Header} from './components/header/header';
import {Loader} from './components/loader/loader';
import { Cart } from './components/cartitem/cartitem';
import Booklist from './components/booklist/booklist';
import {CurrencyContext, WishlistContext} from'./context';

export const AppContext = React.createContext();

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bookList:[],
      cartList:[],
      loader1: false,
      loader2: false,
      currency: 'RON',
      wishlist:'Add to wishlist'

    }
  }

  changeCurrency = () => {
   
    if(this.state.currency==='RON'){
      this.setState({currency:'EUR'})
  } else {
    this.setState({currency:'RON'})
  }
}

 addToWishlist = (bookId) => {
  const bookWishlist = this.state.bookList.find(item => item.id === bookId);

 
   if(bookWishlist){
     this.setState({wishlist:'Added'})
   } else {
     this.setState({wishlist: 'Add to wishlist'})
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
          cartList:[],
          loader2:true
        });
    }, 3000);
  
  }
  renderBooks =()=> <Booklist 
  books={this.state.bookList} 
  addToCart={this.addToCart} 
  addToWishlist={this.addToWishlist}
  />
  

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
  /*currency={this.state.currency}*/
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
      const cartUpdate = [...this.state.cartList]//this.state.cartList.slice();//
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
    let cartUpdated = [...this.state.cartList]//this.state.cartList.slice();//
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
      <WishlistContext.Provider value={{wishlist:this.state.wishlist}}>
        <CurrencyContext.Provider value={{currency:this.state.currency}}>
          <div className="App">
            <Header name='Home'wish='Wishlist' itemcart='Cart'/>
            <div className='books-container'>
            {this.renderBooks()}
            </div>
            <Loader/>
          </div>
          </CurrencyContext.Provider>
        </WishlistContext.Provider>
    );
    else 
    return(
      <WishlistContext.Provider value={{wishlist:this.state.wishlist}}>
        <CurrencyContext.Provider value={{currency:this.state.currency}}>
          <div className="App">

            <Header name='Home'wish='Wishlist' itemcart='Cart'/>

            <div className='books-container'>
            {this.renderBooks()}
            </div>
            
            <div className='cart-render'>
            {this.renderCart()}
            <button onClick={this.cleanCart} className='remove'>Empty cart</button><br/>
            <span>Currency: {this.state.currency}</span><br/>
            <button onClick={this.changeCurrency}>Change Currency</button>
            </div>
          </div>
          </CurrencyContext.Provider>
        </WishlistContext.Provider>);
  }
}



