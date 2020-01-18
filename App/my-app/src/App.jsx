import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import { Car } from './components/Car';
import { Toy } from './components/Toy';
import { Household } from './components/Household';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: [
        { id: 1, name: "Toyota", color: "red", price: 29292 },
        { id: 2, name: "Renault", color: "blue", price: 2302 },
        { id: 3, name: "BMW", price: 232 },
        { id: 4, name: "Volswagen", color: "black", price: 1232 },
        { id: 5, name: "Peugeot", price: 1232 }
      ],
      toys: [
        { id: 1, name: "Doll", recommendedAge: 5, recommendedGender: "girl", price: 30 },
        { id: 2, name: "Train", recommendedAge: 4, recommendedGender: "boy", price: 12 },
        { id: 3, name: "Ball", recommendedAge: 6, price: 30 },
        { id: 4, name: "Puzzle", recommendedAge: 12, price: 30 },
        { id: 5, name: "Teddy bear", price: 30 },
        { id: 6, name: "Kite", recommendedAge: 10, price: 30 }
      ],
      households: [
        { id: 1, name: "Pronto", noOfItems: 2, price: 30 },
        { id: 2, name: "Cif", noOfItems: 3, recommendations: "For kitchen use only!", price: 130 },
        { id: 3, name: "Sponge", noOfItems: 10, price: 14 },
        { id: 4, name: "Fairy", recommendations: "For dish washing use!", price: 10 },
        { id: 5, name: "Towel", noOfItems: 6, price: 200 },
        { id: 6, name: "Broom", noOfItems: 2, recommendations: "Do not use on shiny surfaces!", price: 60 }
      ]
    }
  }

  renderCars = () => {
    return this.state.cars.map(car => <Car id={car.id} name={car.name} color={car.color} price={car.price} />)
  }

  renderToys = () => {
    return this.state.toys.map(toy => <Toy id={toy.id} name={toy.name} recommendedAge={toy.recommendedAge} recommendedGender={toy.recommendedGender} price={toy.price} />)
  }

  renderHouseholds = () => {
    return this.state.households.map(household => <Household id={household.id} name={household.name} noOfItems={household.noOfItems} recommendations={household.recommendations} price={household.price} />)
  }


  render() {
    return (
      <div className="App">
        <div className='cars-container'>
          <p>Cars</p>
          {this.renderCars()}
        </div>
        <div className='toys-container'>
          <p>Toys</p>
          {this.renderToys()}
        </div>
        <div className='households-container'>
          <p>Household Items</p>
          {this.renderHouseholds()}
        </div>
      </div>
    );
  }
} 