import React, {Component} from 'react';
import {AppContext} from "./context.js";

export default class AppStore extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          header:[],
          cartList: [],
          phones: [],
          itemLoaded: false,
          cartLoaded: false
        };
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
    removeFromCart = (itemId) => {
      const cartUpdated = this.state.cartList.filter(x => x.id !== itemId);
      this.setState({cartList: cartUpdated});
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
    clean = ()=>{
      this.setState({cartList:[]});
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

      render(){
          return<AppContext.Provider  
          value={{
              ...this.state,
              addToCart: this.addToCart,
              removeFromCart: this.removeFromCart,
              removeOneFromCart: this.removeOneFromCart,
              clean: this.clean

              }}
              >
              {this.props.children}
          </AppContext.Provider>
      }

}