import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import Toys from './components/ToysItem';
// import { CartItem }  from './components/CartItem';
// import { Header } from './components/Header/Header'; 
import ToysList from './components/ToysList';
import { LocaleContext, /*ThemeContext*/ AppContext } from './context';
import CartList from './components/CartList';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import {createBrowserHistory} from 'history';


const history = createBrowserHistory();

export default class App extends React.Component {
  contextType = AppContext;

render() {
  if(this.context.itemLoaded) {
    return <div>Se incarca...</div>;
  }

  return (

    <BrowserRouter history={history}>
      <LocaleContext.Provider value={{language: this.context.language}}>
        
        <Link to='/about'> About </Link>
        <Link to='/home'> Home </Link>
        <Link to='/'> Toys List </Link>
        <br />
        <br />
            <Route path='/' component={ToysList} />
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />

         <div>
          {/* <Header title='Toyz for Kids' subtitle='Tema 3 si 4'/> */}
        </div> 
        <div className='cart-container'>
          <button onClick={this.context.cleanCart}>Remove from Cart</button>
          <span>Language: {this.context.language} </span>
          <button onClick= {this.context.changeLanguage}>Change language </button>
        <CartList></CartList>
        </div>

        {/* Este trecut mai jos in Link */}
        {/* <ToysList></ToysList> */} 


      </LocaleContext.Provider>
      </BrowserRouter>
  );
}
}


