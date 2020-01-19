import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import { Item } from './components/Item';
import Header from './components/Header';
import CartItem from './components/CartItem';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.state = {
      headerList: [],
      itemList: [],
      cartList: [],
      loader: false,
      quantity: 0
    }
  }

  incrementQuantity = () => {
    this.setState(ps => {
      return { quantity: ps.quantity + 1 }
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        headerList: [{ title: "Unicorn Land", subtitle: "Kids fav place" }],
        itemList: [
          { id: 1, name: "Doll", recommendedAge: 5, recommendedGender: "girl", price: 30 },
          { id: 2, name: "Train", recommendedAge: 4, recommendedGender: "boy", price: 12 },
          { id: 3, name: "Ball", recommendedAge: 6, price: 30 },
          { id: 4, name: "Puzzle", recommendedAge: 12, price: 30 },
          { id: 5, name: "Teddy bear", recommendedAge: 3, price: 30 },
          { id: 6, name: "Kite", recommendedAge: 10, price: 30 }
        ],
        loader: true
      })
    }, 3000);
  }

  renderHeader = () => { return this.state.headerList.map(headerItem => <Header title={headerItem.title} subtitle={headerItem.subtitle} />) }
  renderItem = () => {
    return this.state.itemList.map(item => <Item incrementQuantity={this.incrementQuantity} addToCart={this.addToCart} id={item.id} name={item.name} recommendedAge={item.recommendedAge} recommendedGender={item.recommendedGender} price={item.price} />)
  }
  renderCart = () => { return this.state.cartList.map(cart => < CartItem removeFromCart={this.removeFromCart} id={cart.id} name={cart.name} quantity={cart.quantity} price={cart.price} />) }

  cleanCart = () => {
    this.setState({ cartList: [] })
  }

  addToCart = (itemID) => {
    const itemToAdd = this.state.itemList.find(item => item.id === itemID);
    if (itemToAdd){
    if( !this.state.cartList.find(item => item.id === itemID)) {
      const cartUp = this.state.cartList.slice();
      cartUp.push(itemToAdd);
      this.incrementQuantity();
      this.setState({ cartList: cartUp });
    }
    else{
      this.setState({ quantity: this.incrementQuantity() });
    }
  }
  }

  removeFromCart = (itemID) => {
    const cartUp = this.state.cartList.filter(item => item.id !== itemID);
    this.setState({ cartList: cartUp });
  }
  render() {
    if (!this.state.loader)
      return "Loading...";
    return (
      <div className="App">
        <>
          <div className="header">
            {this.renderHeader()}
          </div>
        </>
        <div className='cart-container'>
          <button onClick={this.cleanCart}>Delete cart</button>
          <p>My Cart</p>
          {this.renderCart()}
        </div>
        <div className='toys-container'>
          <p>Toys</p>
          {this.renderItem()}
        </div>
      </div>
    );
  }
} 