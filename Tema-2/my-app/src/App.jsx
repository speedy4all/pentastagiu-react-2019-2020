import React from 'react';
import './App.css';
import {Phone} from './Components/ListItem/Phone';
import {Header} from './Components/Header/Header';
import {CartList} from './Components/CartList/CartList';
import logo from './logo.png';
export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      header:[],
      cartList: [],
      phones: [],
      itemLoaded: false,
      cartLoaded: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        header: [
          {
          title:"Online Phone Shope",
          subtitle: "Enjoy Shopping"
          }
        ],
        
        phones: [
          {
            id: 1,
            name:"Samsung",
            memory: "4G",
            storage:"64G",
            price:"1200",
            state:"resigilat"
          },
          {
            id: 2,
            name:"Huawei",
            memory: "6G",
            storage:"128G",
            price:"1500"
          },
          {
            id: 3,
            name:"Xiaomi",
            memory: "8G",
            storage:"128G",
            price:"1800",
            state:"resigilat"
          },
          {
            id: 4,
            name:"Apple",
            memory: "4G",
            storage:"64G",
            price:"1700",
            state:"resigilat"
          },
          {
            id: 5,
            name:"Alcatel",
            memory: "2G",
            storage:"16G",
            price:"800"
          }
        ],
        cartList:[],
        itemLoaded: true,
        cartLoaded: true
      });
    }, 3000);
  }
  renderHeader = () =>{
    return this.state.header.map(header => 
    <Header
    key = {header.id}
    title={header.title} 
    subtitle ={header.subtitle}
    />)
  }
  renderPhones = () => this.state.phones.map((item) => 
    <Phone 
    addToCart = {this.addToCart}
    itemId = {item.id}
    name={item.name} 
    memory = {item.memory} 
    storage = {item.storage} 
    price={item.price} 
  state={item.state}/>);
  
  renderCart = () => this.state.cartList.map((cartList,index) => 
   <CartList 
    key ={`${CartList.id}-${index}`}
    removeFromCart = {this.removeFromCart}
    add = {this.addToCart}
    decreaseCount = {this.removeOneFromCart}
    clean = {this.clean}
    itemId = {cartList.id}
    name={cartList.name} 
    price={cartList.price} 
    state={cartList.state}
    count={cartList.count}
    />);
  
  clean = ()=>{
    this.setState({cartList:[]});
  }
  removeFromCart = (itemId) => {
    const cartUpdated = this.state.cartList.filter(x => x.id !== itemId);
    this.setState({cartList: cartUpdated});
  }
  addToCart = (itemId) =>{
    const itemToAdd = this.state.phones.find(x => x.id === itemId);
    if(!itemToAdd){
      return undefined;
    }
    const cartListUpdated = this.state.cartList.slice();
    const itemAlreadyAdded = cartListUpdated.find(x => x.id === itemId);

    if(itemAlreadyAdded){ 
      itemAlreadyAdded.count++;
    }else {
      const newItem = Object.assign({}, itemToAdd);
      newItem.count = 1;
      cartListUpdated.push(newItem);
    }
     this.setState({cartList: cartListUpdated});
    
    }

   removeOneFromCart = (itemId) => {
     let cartListUpdated = this.state.cartList.slice();
     const itemToRemove = cartListUpdated.find(x => x.id === itemId);

     if(itemToRemove && itemToRemove.count === 1){
       cartListUpdated = cartListUpdated.filter(x => x.id !== itemId);
     }else {
       itemToRemove.count = itemToRemove.count - 1;
     }

     this.setState({cart: cartListUpdated});
   }

   render(){
     if(!this.state.itemLoaded){
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
            <button className="clear-cart" onClick={this.clean}>Clear cart</button>
            </h1>
      
            {this.renderCart()}
            
            
          
        </div>
        
      </div>
    );

   }

}



