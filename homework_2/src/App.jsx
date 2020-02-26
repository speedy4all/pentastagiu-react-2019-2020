import React from 'react';
import './App.css';
import Item from './components/item';

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state ={
      items: [
       {id: 1,name:"Masina de spalat Samsung Add-Wash WW70K44305W", newPrice: "799.99", zecimal:"99"},
       {id: 2,name:"Masina de spalat rufe Slim Arctic APL71012BDW1", newPrice: "649.99", oldPrice:"1200", zecimal:"99"},
       {id: 3,name:"Masina de spalat rufe Beko WKY71033LSYB2", newPrice: "1249.99", oldPrice:"1989.99"},
       {id: 4,name:"Masina de spalat rufe Slim Beko WRE7512XWW", newPrice: "999", oldPrice:"1349.99"},
       {id: 5,name:"Masina de spalat rufe Slim Beko WRE7512XWW", newPrice: "999", oldPrice:"1200", zecimal:"99"},
       {id: 6,name:"Masina de spalat rufe Slim Beko WRE7512XWW", newPrice: "999", oldPrice:"1200"}
      ]
    }
  }

  renderItemms = () => {
    return this.state.items.map(item =>
      <Item
      key = {item.id}
      name = {item.name}
      newPrice ={item.newPrice}
      oldPrice ={item.oldPrice}
      zecimal ={item.zecimal}
      />
      )
  }

  render(){
    return(
      <div class = "App">
        <div className ="list-container">
          {this.renderItemms()}
        </div>
      </div>

    );
  }
}
