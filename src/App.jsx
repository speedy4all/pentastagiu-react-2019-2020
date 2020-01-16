import React from 'react';
import './App.css';
import Car from "./components/Car"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component{

  constructor (props){
    super(props);

    this.state = {
      cars:[
        {id:1, name: "BMW", img:"BMW.jpg", color: "black", year:"2014"},
        {id:1, name: "OPEL", img:"OPEL.jpg", color: "red", year:"2011"},
        {id:1, name: "RENAULT", img:"RENAULT.jpg", color: "white", year:"2010"},
        {id:1, name: "FORD", img:"FORD.jpg" ,color: "green" },
        {id:1, name: "KIA", img:"KIA.jpg" ,color: "grey" }
        

      ]
    }
  }

  renderCars = () => {
    return this.state.cars.map(car => <Car 
    key={car.id}
    name={car.name} 
    img={car.img}
    color={car.color}
    year={car.year}
     />
    ); 
      }

  render(){
      return (
          <div className="App">
            <div className="cars-container">
              {this.renderCars()}

            </div>
          </div>
      );
    }
}





