import React, {useContext, useEffect} from "react";
import CarItem from "../car-item";
import Spinner from "../spinner";

import "./box-list.css";
import {ThemeContext} from "../context/context";


const BoxList =(props)=> {
    const {cars} = props;

    const {themeColor}=useContext(ThemeContext);
    useEffect(()=>{},[cars]);

    const renderCarList = () =>
        cars.map((car, index) => (
            <CarItem
                key = {car.id}
                id={car.id}
                row={index}
                name={car.name}
                engine={car.engine}
                combustible={car.combustible}
                color={car.color}
                price={car.price}
                addToCart={props.addToCart}
            />
        ));

    if (!props.carsLoaded) return <Spinner />;
    return (<div className="box-list">
        <table className={`table table-striped ${themeColor}`}>
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
            {renderCarList()}
            </tbody>
        </table>
    </div>);
};

export default BoxList;
