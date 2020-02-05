import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Toys } from './components/ToysItem/Toys';
import { CartItem }  from './components/CartItem';
import { Header } from './components/Header/Header'; 
import ToysList from './components/ToysList';
import { LocaleContext, ThemeContext, AppContext } from './context';

export default class App extends React.Component {
  contextType = AppContext;


  changeLanguage = () => {
    this.setState({language: 'ro'});
  }

  componentDidMount() {
    
  }

  cleanCart = () => {
    this.setState({cartList: [] });
  }

  renderToys = () => (
    <ToysList 
      items={this.state.toys} 
      addToCart={this.addToCart} 
    /> 
);

  renderCart = () => this.state.cartList.map((cartItem, index) => {
    return <CartItem
        remove={this.removeFromCart}
        key={`${cartItem.id}-${index}`}
        itemId={cartItem.id}
        name={cartItem.name}
        age={cartItem.age}
        price={cartItem.price}
        language={this.state.language}
    /> 
  });

  addToCart = (itemId) => {
    const itemToAdd = this.state.toys.find(toys => toys.id === itemId);

    if(itemToAdd) {
      const cartUpdated = this.state.cartList.slice();
      cartUpdated.push(itemToAdd);

      this.setState({cartList: cartUpdated});
    }
  }

  removeFromCart = (itemId) => {
    const cartUpdated = this.state.cartList.filter(x => x.id !== itemId);
    this.setState({cartList: cartUpdated});
  }



render() {
  if(!this.state.itemLoaded && !this.state.listLoaded)
    return <div>Se incarca...</div>

  return (

    
    <ThemeContext.Provider value={{ style: 'light' }}>
      <LocaleContext.Provider value={{language: this.state.language}}>
         <div>
          <Header title='Toyz for Kids' subtitle='Tema 3 si 4'/>
        </div> 
        <div className='cart-container'>
          <button onClick={this.cleanCart}>Remove from Cart</button>
          <span>Language: {this.state.language}</span>
          <button onClick= {this.changeLanguage}>Change language </button>
        {this.renderCart()}
        </div>

        <div className='toys-container'>
          {this.renderToys()}
        </div>

      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}
}


