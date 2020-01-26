import React, { Component } from "react";
import CarItem from "../car-item";
import Spinner from "../spinner";

import "./box-list.css";
import {ThemeContext} from "../context/context";


export default class BoxList extends Component {
    static contextType = ThemeContext;

    shouldComponentUpdate(nextProps) {
        return nextProps.cars !== this.props.cars
    }

    renderCarList = () =>
        this.props.cars.map((car, index) => (
            <CarItem
                key = {car.id}
                id={car.id}
                row={index}
                name={car.name}
                engine={car.engine}
                combustible={car.combustible}
                color={car.color}
                price={car.price}
                addToCart={this.props.addToCart}
            />
        ));
    render() {
        if (!this.props.carsLoaded) return <Spinner />;
        return (<div className="box-list">
            <table className={`table table-striped ${this.context.themeColor}`}>
                <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Engine</th>
                    <th scope="col">Combustible</th>
                    <th scope="col">Color</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {this.renderCarList()}
                </tbody>
            </table>
        </div>);
    }
}
