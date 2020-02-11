import React from 'react';
import './App.css';
import {Phone} from './Components/ListItem/Phone';
import {Header} from './Components/Header/Header';
import {CartList} from './Components/CartList/CartList';
import logo from './logo.png';
import {AppContext} from './context';
export default class App extends React.Component {
  static contextType = AppContext;
  
  
  componentDidMount() {
    console.log(this.context);
  }
  renderHeader = () =>{
    return this.context.header.map(header => 
    <Header
    key = {header.id}
    title={header.title} 
    subtitle ={header.subtitle}
    />)
  }
  renderPhones = () => this.context.phones.map((item) => 
    <Phone 
    addToCart = {this.context.addToCart}
    itemId = {item.id}
    name={item.name} 
    memory = {item.memory} 
    storage = {item.storage} 
    price={item.price} 
  state={item.state}/>);
  
  renderCart = () => this.context.cartList.map((cartList,index) => 
   <CartList 
    key ={`${CartList.id}-${index}`}
    removeFromCart = {this.context.removeFromCart}
    add = {this.context.addToCart}
    decreaseCount = {this.context.removeOneFromCart}
    clean = {this.context.clean}
    itemId = {cartList.id}
    name={cartList.name} 
    price={cartList.price} 
    state={cartList.state}
    count={cartList.count}
    />);
  
  
  

   

   render(){
     if(!this.context.itemLoaded){
       return <div>Loading....</div>
     }

    return (
      <div className="App-header ">
        <div className="phone-container">
          <img src={logo} className="logo"/>
            {this.renderHeader()}
            {this.renderPhones()}
            
            <h1 className="cart">
            Cart
            <button className="clear-cart" onClick={this.context.clean}>Clear cart</button>
            </h1>
      
            {this.renderCart()}
            
        </div>
        
      </div>
    );

   }

}



