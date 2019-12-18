import React from 'react';
import './App.css';
import { Shoes } from './components/Shoes';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shoes: [
       {id: 1, name:"Cizme", price:"300", size:"38", color:"negru", description:"piele"},
       {id: 2, name:"Ghete", price:"230", size:"36", color: "roz"},
       {id: 3, name:"Pantofi", price:"180", size:"40", color: "albastru", description:"piele"},
       {id: 4, name:"Botine", price:"200", size:"39", color:"maro"},
       {id: 5, name:"Sandale", price:"150", size:"41", color: "rosu"},
      ]
    }
  }

  renderShoes = () => {
    return this.state.shoes.map(shoes => <Shoes key={shoes.id} name={shoes.name} price={shoes.price} size={shoes.size} description={shoes.description} color={shoes.color} />)
  }
  render() {
    return(
    <div className="App">
      <div className="pairs-container">
        {this.renderShoes()}
      </div>
    </div>);
  }
}

