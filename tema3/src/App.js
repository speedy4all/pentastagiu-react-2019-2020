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
            {imageUrl: require('./images/dostoievski.jpg'), title:'Demons', author:'Dostoievski', price:10},
            {imageUrl: require('./images/fowles.jpg'), title:'The magus', author:'Fowles', price: 9},
            {imageUrl: require('./images/germany.jpg'), title:'Germany in WW2', author:'Jan Kershaw', price: 21},
            {imageUrl: require('./images/marquez.jpg'), title:'One Hundred Years', author:'Garcia Marquez', price:11},
            {imageUrl: require('./images/simpson.jpg'), title:'You dont Know JS', author:'Kyles Simpson', price:18}
          ],
          loader1:true

      });
    },3000);

    setTimeout(()=>{
         this.setState({
          /*receiving values for cartList props*/
          cartList:[
           
            {title:'Demons', author:'Dostoievski', price:10},
            {title:'The magus', author:'Fowles', price: 9},
            {title:'Germany in WW2', author:'Jan Kershaw', price: 21},
            {title:'One Hundred Years', author:'Garcia Marquez', price:11},
            {title:'You dont Know JS', author:'Kyles Simpson', price:18}
          ],
          loader2:true
        });
    }, 5000);
  
  }
  renderBooks =()=> this.state.bookList.map(book => <Books key={book.title+'1'} imageUrl={book.imageUrl} title={book.title} author={book.author} price={book.price}/>)
  renderCart =()=> this.state.cartList.map(cart =><Cart key={cart.title +'2'} title={cart.title} author={cart.author} price={cart.price}/>)
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
          </div>
        </div>);
  }
}



