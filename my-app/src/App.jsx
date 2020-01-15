import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Mountain } from './Components/mountains';
import { CartItem } from './Components/cartItem';
import { Header} from './Components/header'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
  this.state = {
    header:{},
    cartList: [],
    mountains: [],
    itemLoaded: false,
    cartLoaded: false,
  }
}

componentDidMount() {
  setTimeout(() => {
    this.setState({
   header: {
     title: "Trips in the magical romanian mountains",
     subtitle: "Are you sure that you know your country?",
    },
    cartList: [
      {peak:"Moldoveanu", county:"Sibiu", cottage: "Villa Balea"},
      {peak:"Omu", county:"Brasov"},
      {peak:"Toaca", county:"Neamt"},
      {peak:"Retezat", county:"Hunedoara"},
      {peak:"Pietrosul Rodnei", county:"Maramures"},
    ],
    mountains: [
      {id: 1, peak:"Moldoveanu",       mountain:"Fagaras", county:"Sibiu",     height:"2544", cottage: "Villa Balea"},
      {id: 2, peak:"Omu",              mountain:"Bucegi",  county:"Brasov",    height:"2505"},
      {id: 3, peak:"Toaca",            mountain:"Ceahlau", county:"Neamt",     height:"1900"},
      {id: 4, peak:"Retezat",          mountain:"Retezat", county:"Hunedoara", height:"2482"},
      {id: 5, peak:"Pietrosul Rodnei", mountain:"Rodna",   county:"Maramures", height:"2303"},
    ],
    itemLoaded: true,
    cartLoaded: true,
    });
  }, 300); 
}

 renderMountains = () => this.state.mountains.map(mountain => 
   <Mountain 
    peak={mountain.peak} 
    mountain={mountain.mountain} 
    county={mountain.county} 
    height={mountain.height}
    cottage={mountain.cottage}
   />);

   renderCart = () => this.state.cartList.map(cartItem =>
    <CartItem 
     peak = {cartItem.peak}
     county = {cartItem.county}
     cottage = {cartItem.cottage}
    />
    );
 
  render() {
    if((!this.state.itemLoaded) || (!this.state.cartLoaded)) return <div>Loading...</div>;
    return(
    <>
      <Header title={this.state.header.title} subtitle={this.state.header.subtitle}/>   
      <div className="cart-container">
          {this.renderCart()}
      </div>
      <div className="mountains-container">
        {this.renderMountains()}
      </div>
    </>
    );  
  }
}
