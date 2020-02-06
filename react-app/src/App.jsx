import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Toys from './components/ToysItem';
import { CartItem }  from './components/CartItem';
// import { Header } from './components/Header/Header'; 
import ToysList from './components/ToysList';
import { LocaleContext, ThemeContext, AppContext } from './context';



export default class App extends React.Component {
  contextType = AppContext;

render() {
  if(this.context.itemLoaded) {
    return <div>Se incarca...</div>;
  }

  return (

    
      <LocaleContext.Provider value={{language: this.context.language}}>
         <div>
          {/* <Header title='Toyz for Kids' subtitle='Tema 3 si 4'/> */}
        </div> 
        <div className='cart-container'>
          <button onClick={this.context.cleanCart}>Remove from Cart</button>
          <span>Language: {this.context.language}</span>
          <button onClick= {this.context.changeLanguage}>Change language </button>
        {/* <CartList /> */}
        </div>
        {/* <ToysList /> */}

      </LocaleContext.Provider>
  );
}
}


