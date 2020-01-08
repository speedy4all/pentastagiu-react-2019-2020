import React from 'react';
import './App.css';
import {Phone} from './Components/Phone';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      phones: [
        {id: 1,name:"Samsung",memory: "4G",storage:"64G",price:"1200",state:"resigilat"},
        {id: 2,name:"Huawei",memory: "6G",storage:"128G",price:"1500"},
        {id: 3,name:"Xiaomi",memory: "8G",storage:"128G",price:"1800",state:"resigilat"},
        {id: 4,name:"Apple",memory: "4G",storage:"64G",price:"1700",state:"resigilat"},
        {id: 5,name:"Alcatel",memory: "2G",storage:"16G",price:"800"}
      ]
    }
  }

  renderPhones = () =>{
    return this.state.phones.map(phone => 
    <Phone 
    key = {phone.id}
    name={phone.name} 
    memory = {phone.memory} 
    storage = {phone.storage} 
    price={phone.price} 
    state={phone.state}/>)
  }

   render(){

    return (
      <div className="App-header">
        <div className="phone-container">
          {this.renderPhones()}
        </div>
        
      </div>
    );

   }

}



