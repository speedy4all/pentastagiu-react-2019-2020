import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Car from './Car/Car.jsx';
import Spinner from '../Spinner/Spinner.jsx';


class Cars extends Component {

    constructor(props){
        super(props);

        this.state = {
            cars: [],
            loading: true
        };
    }

    componentDidMount(){
        const cars = [
            {
                id: '1',
                mark: 'Dacia',
                model: 'Logan',
                color: '#ff0000',
                price: '13500'
            },
            {
                id: '2',
                mark: 'Opel',
                model: 'Astra',
                color: '#0000ff',
                price: '23700'
            },
            {
                id: '3',
                mark: 'Skoda',
                model: 'Octavia',
                color: '#009933',
                price: '21000'
            },
            {
                id: '4',
                mark: 'Fiat',
                model: 'Panda',
                color: '#cc0000',
                price: '7500'
            },
            {
                id: '5',
                mark: 'Ford',
                model: 'Fiesta',
                color: '#ffcc00',
                price: '19000'
            }
        ];
        setTimeout(() => {
            this.setState({cars: cars, loading: false});
        }, 1500);
    }

    showCars = () => {
        return this.state.cars.map(car => <Car key={car.id} { ...car } />);
    }

    render(){

        let html = (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Mark</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        this.showCars()
                    }


                </tbody>
            </table>
        );

        if(this.state.loading){
            html = <Spinner />;
        }

        return html;
    }
}

export default Cars;
