import React from 'react';
import Car from './components/Car';
import CartItem from './components/CartItem';
import Header from './header/Header';
import './App.css';


  class App extends React.Component {
    state = {
      carList: [],
      carListLoading: true,
      cartItems:[],
      cartItemsLoading: true,
      titleList: {title: "Homework", subtitle: "carStuff"}
    };

    componentDidMount () {
      setTimeout(() => {
        this.setState ({
          carList: [
            {id: 1, brand: "Audi", fuel: "gas", productionYear: "2014", color: "red", price: "16744"},
            {id: 2, brand: "Jeep", fuel: "diesel", power:"180HP", productionYear: "2001", color: "green", price: "12477"},
            {id: 3, brand: "Renault", fuel: "electric", productionYear: "2015", color: "blue"},
            {id: 4, brand: "Dacia", fuel: "gas", power: "350HP", productionYear: "2006", price: "245144"},
            {id: 5, brand: "Toyota", power:"110HP", productionYear: "2013", color: "green", price: "12687"},
            {id: 6, brand: "Seat", fuel: "diesel", power:"80HP", color: "black"}
          ],
          carListLoading: false,
          cartItemsLoading: false
        })
      }, 1000);
    }

    addToCart = (itemId) => {
      const itemToAdd = [...this.state.carList].find(item => item.id === itemId);
      const copyOfItemToAdd = Object.assign({}, itemToAdd);
      const cartItems = [...this.state.cartItems];
      const indexOfCartItem = cartItems.findIndex(item => item.id === itemId);
      if (indexOfCartItem === -1) {
        copyOfItemToAdd.qty = 1;
        cartItems.push(copyOfItemToAdd);
      } else {
        copyOfItemToAdd.qty = cartItems[indexOfCartItem].qty + 1;
        cartItems.splice(indexOfCartItem, 1, copyOfItemToAdd);
      }
      this.setState({
        cartItems
      });
    }

    removeItem = (itemId) => {
      const cartItems = this.state.cartItems.reduce( (newArr, item) => {
        if (item.id !== itemId) {
          newArr.push(item);
          return newArr;
        }
        return newArr;
      },[]);
      this.setState({
        cartItems
      })
    }  

    newQty = (itemId, e) => {
      const operator = e.currentTarget.getAttribute('data-direction');
      const cartItems = [...this.state.cartItems];
      const indexOfCartItem = cartItems.findIndex(item => item.id === itemId);
      const copyOfCartItem = Object.assign({}, cartItems[indexOfCartItem]);
      switch (operator) {
        case "+":
          copyOfCartItem.qty++;
          break;
        default:
          copyOfCartItem.qty--;
      }
      if (copyOfCartItem.qty === 0) {
        cartItems.splice(indexOfCartItem, 1);
      } else {
        cartItems.splice(indexOfCartItem, 1, copyOfCartItem);
      }
      this.setState({
        cartItems
      })
    }

    render() {
      return (
        <>
        <Header {...this.state.titleList} />
        <div className='list-container'>
          <div className='table-container'>
            { this.state.carListLoading?<p>Loading...</p>:(
              <table>
                <thead> 
                  <tr key = 'tableHead'>
                      <th>Brand</th>
                      <th>Fuel</th>
                      <th>Power</th>
                      <th>Production year</th>
                      <th>Color</th>
                      <th>Price</th>
                      <th></th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.carList.map(car => <Car key = { car.id } {...car} addToCart = { this.addToCart }/> ) }
                </tbody>
              </table>)}
          </div>
          <div className='table-container'>
            { this.state.carListLoading?<p>Loading...</p>:(
              <table>
                <thead> 
                  <tr key = 'tableHead'>
                      <th>Brand</th>
                      <th>Power</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th></th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.cartItems.map(car => <CartItem key = { car.id } {...car} removeItem = { this.removeItem } newQty = { this.newQty } /> ) }
                </tbody>
              </table>)}
          </div>
        </div>
        </>
      );
    }
  }

export default App;
