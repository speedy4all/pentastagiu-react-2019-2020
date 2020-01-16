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
      titleList: {title: "Homework3", subtitle: "carStuff"}
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
          cartItems: [
            {id: 1, brand: "Audi", fuel: "gas", productionYear: "2014", color: "red", price: "16744"},
            {id: 4, brand: "Dacia", fuel: "gas", power: "350HP", productionYear: "2006", price: "245144"},
            {id: 5, brand: "Toyota", power:"110HP", productionYear: "2013", color: "green", price: "12687"},
          ],
          carListLoading: false,
          cartItemsLoading: false
        })
      }, 3000);
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
                  </tr>
                </thead>
                <tbody>
                  { this.state.carList.map(car => <Car key = { car.id } {...car} /> ) }
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
                  </tr>
                </thead>
                <tbody>
                  { this.state.cartItems.map(car => <CartItem key = { car.id } {...car} /> ) }
                </tbody>
              </table>)}
          </div>
        </div>
        </>
      );
    }
  }

export default App;
