import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Toy } from './components/Toy' 

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toys: [
      {id: 1, name: "Lego Duplo",type:"Construction Set", price: 125, description:"My first train"},
      {id: 2, name:"Frozen II", type:"Doll", price: 250, description:"Elsa Doll with singing function"},
      {id: 3, name:"Lego City", type:"Construction Set", price: 700, description:"Lego City Train Station"},
      {id: 4, name:"My Talking Tom", type:"Interactive toy", price: 120},
      {id: 5, name:"Transformers 1", type:"Car", price: 350}
      ]
    }
  }
     renderToys = () => {
       return this.state.toys.map(toy => 
       <Toy 
       key = {toy.id}
       name={toy.name} 
       type={toy.type}
       price = {toy.price} 
       description={toy.description} 
       />)
     }

  render(){
      return (
        <div className="App">
          <div className="toys-container">
            {this.renderToys()}
          </div>
        </div>
      );
  }
}


