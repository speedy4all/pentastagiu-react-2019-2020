import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Toys } from './components/ToysItem/Toys/';
import { CartItem }  from './components/CartItem/';
import  {Header} from './components/Header/Header'; 

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toys: [],
      itemLoaded: false,
      cartList: [],
      listLoaded: false,
      // titleList: {
      //   title: "Toyz for Kids",
      //   subtitle: "Tema 3&4"
      // },
    }
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({
        toys: 
          [
            { id: 1, name: 'Masina', price: 150, age: '3-12', culoare: 'Albastru' },
            { id: 2, name: 'Papusa', price: 99, age: '3-12' },
            { id: 3, name: 'Set LEGO', price: 245, age: '8-16' },
            { id: 4, name: 'Set Castel', price: 120, age: '3-10', culoare: 'Gri' },
            { id: 5, name: 'Puzzle', price: 100, age: '6-15' }
          ],
        cartList: [
            { id: 6, name: 'Robot', price: 199, age: '6-14', culoare: 'Verde' },
        ],
        itemLoaded: true,
        listLoaded: true
      });
    }, 3000 );
    

  }

  renderToys = () => {
    return this.state.toys.map(toys => 
      <Toys 
        id={toys.id} 
        name={toys.name} 
        price={toys.price} 
        age={toys.age} 
        culoare={toys.culoare} 
      /> )
  }

  renderCart = () => {
    return this.state.cartList.map(cartItem =>
      <CartItem
        name={cartItem.name}
        age={cartItem.age}
        price={cartItem.price}
    /> );
  }

render() {
  if(!this.state.itemLoaded && !this.state.listLoaded)
    return <div>Se incarca...</div>

  return (

      <>
        <div>
          <Header title='Toyz for Kids' subtitle='Tema 3 si 4'/>
        </div>


        <div className='cart-container'>
        {this.renderCart()}
        </div>

        <div className='toys-container'>
          {this.renderToys()}
        </div>

      </>);
}

}


