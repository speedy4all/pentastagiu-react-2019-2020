import React, { Component } from 'react'
import Toy from './Toy/Toy'

export default class Toys extends Component {

    state = {
        toys: [
            { id: 0, model: "Teddy-bear", color: "white", price: 100 },
            { id: 1, model: "Doll", color: "black", price: 800 },
            { id: 2, model: "Slingshot", color: "blue", price: 55 },
            { id: 3, model: "Racing Car", color: "red", price: 289 }
        ]
    }

    renderToys = () => {
        return this.state.toys.map(toy => <Toy
            key={toy.id}
            model={toy.model}
            color={toy.color}
            price={toy.price} />)
    }

    render() {
        return (
            <div className="toy-item">
                {this.renderToys()}
            </div>
        );
    }
}
