import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import { Toy } from './components/ToyItem';
import Header from './components/Header';
import CartItem from './components/CartItem';


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      header: [],
      toys: [],
      cart: [],
      loader: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        header: [{ title: "Unicorn Land", subtitle: "Kids fav place" }],
        toys: [
          { id: 1, name: "Doll", recommendedAge: 5, recommendedGender: "girl", price: 30 },
          { id: 2, name: "Train", recommendedAge: 4, recommendedGender: "boy", price: 12 },
          { id: 3, name: "Ball", recommendedAge: 6, price: 30 },
          { id: 4, name: "Puzzle", recommendedAge: 12, price: 30 },
          { id: 5, name: "Teddy bear", recommendedAge: 3, price: 30 },
          { id: 6, name: "Kite", recommendedAge: 10, price: 30 }
        ],
        cart: [
          { name: "Doll", price: 30 },
          { name: "Train", price: 12 }
        ],
        loader: true
      })
    }, 3000);
  }

  renderHeader = () => { return this.state.header.map(headerItem => <Header title={headerItem.title} subtitle={headerItem.subtitle} />) }
  renderToys = () => {
    return this.state.toys.map(toy => <Toy id={toy.id} name={toy.name} recommendedAge={toy.recommendedAge} recommendedGender={toy.recommendedGender} price={toy.price} />)
  }
  renderCart = () => { return this.state.cart.map(cart => < CartItem name={cart.name} price={cart.price} />) }


  render() {
    if (!this.state.loader)
      return "Loading...";
    return (
      <div className="App">
        <>
          <div class="header">
            {this.renderHeader()}
          </div>
        </>
        <div className='toys-container'>
          <p>My Cart</p>
          {this.renderCart()}
        </div>
        <div className='toys-container'>
          <p>Toys</p>
          {this.renderToys()}
        </div>
      </div>
    );
  }
} 