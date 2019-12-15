import React, { Component } from 'react'
import Car from './Car/Car'

export default class Cars extends Component {

    state = {
        cars: [
            { id: 0, brandName: "BMW", model: "i8", color: "white", price: 164300 },
            { id: 1, brandName: "Audi", model: "A8", color: "black", price: 83800 },
            { id: 2, brandName: "Volvo", model: "S-Class", color: "blue", price: 101350 },
            { id: 3, brandName: "Mercedes", model: "S-60 T5 R", color: "red", price: 40000 }
        ]
    }

    renderCars = () => {
        return this.state.cars.map(car => <Car
            key={car.id}
            brandName={car.brandName}
            model={car.model}
            color={car.color}
            price={car.price} />)
    }

    render() {
        return (
            <div className="car-item">
                {this.renderCars()}
            </div>
        );
    }
}
