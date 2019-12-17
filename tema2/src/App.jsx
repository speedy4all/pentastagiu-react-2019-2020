import React from 'react';
import {Phone} from './components/Phone.jsx';
import {Cover} from './components/Cover.jsx';
import './App.css';

export default class App extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
        phones:[
          {imageUrl: require('./phones/iphone11.png'), name:'iPHONE 11', price: 5400, stock:'In stock'},
          {imageUrl: require('./phones/huaweimate30.png'), name:'Huawei Mate 30', price: 3900},
          {imageUrl: require('./phones/samsungnote10.png'), name:'Samsung Note 10', price: 5899, stock: 'In stock'},
          {imageUrl: require('./phones/sonyxperia1.png'), name: 'Sony Xperia 1', price:3399},
          {imageUrl: require('./phones/blackberrykey2.png'), name: 'Blackberry Key2', price: 2980}
        ],
        covers:[
          {imageUrl: require('./covers/coverhuawei.jpg'), name:'Huawei leather cover', price: 120},
          {imageUrl: require('./covers/coveriphone.jpg'), name:'iPHONE 11 leather cover', price: 140},
          {imageUrl: require('./covers/coverkey2.jpg'), name:'Blackberry leather cover', price: 99},
          {imageUrl: require('./covers/covernote10.jpg'), name: 'Note 10 leather cover', price:150, stock:'In stock'},
          {imageUrl: require('./covers/coverxz2.jpg'), name: 'Sony Xperia leather cover', price: 110, stock: 'In stock'}
        ]
      }
   }

     renderPhones = () => {
       return  this.state.phones.map(phone => <Phone 
        imageUrl={phone.imageUrl}
        name = {phone.name} 
        price = {phone.price} 
        stock = {phone.stock}
        />)
     }

     renderCovers = () => {
       return this.state.covers.map(cover => <Cover
       imageUrl={cover.imageUrl}
       name = {cover.name}
       price = {cover.price}
       stock = {cover.stock}
        />)
     }

  render(){
    return(
    <div className="App">
      
      <div className='phones-container'>
      {this.renderPhones()}
      </div>

      <div className='covers-container'>
      {this.renderCovers()}
      </div>
     
    </div>);

  }
}





