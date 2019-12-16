import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Car from '../../components/Car/Car.jsx';
import Button from '../../components/AddNewCarForm/Button/Button.jsx';
import Column from '../../components/Grid/Column/Column.jsx';
import Row from '../../components/Grid/Row/Row.jsx';
import AddNewCarForm from '../../components/AddNewCarForm/AddNewCarForm.jsx';


class Cars extends Component {

    constructor(props){
        super(props);

        this.state = {
            cars: [],
            newCar: {
                id: '',
                mark: '',
                model: '',
                color: 'primary',
                engine: '',
                price: ''
            }
        };
    }

    onInputChangeHandler = (event, inputIdentifier) => {

        const oldCarPropreties = {...this.state.newCar};
        oldCarPropreties[inputIdentifier] = event.target.value;

        this.setState({ newCar: oldCarPropreties });
    };

    onSumbitHandler = event => {
        event.preventDefault();
        
        const car = {...this.state.newCar, id: 0};

        if(this.state.cars.length){
            const lastCarId = this.state.cars[this.state.cars.length - 1].id;
            car.id = lastCarId + 1;
        }

        const cars = [...this.state.cars];
        cars.push(car);

        this.setState({ 
            cars: cars, 
            newCar: {
                id: '',
                mark: '',
                model: '',
                color: 'primary',
                engine: '',
                price: ''
            }
        });
    };

    onDeleteCarHandler = id => {
        const index = this.state.cars.findIndex(car => car.id === id);
        const cars = [...this.state.cars];
        cars.splice(index, 1);

        this.setState({ cars: cars });
    };

    onCancelHandler = () => {
        this.setState({ 
            newCar: {
                id: '',
                mark: '',
                model: '',
                color: 'primary',
                engine: '',
                price: ''
            }
        });
    };

    render() {
    
        let cars = <h2>There is no car here! <br /> You need to create one.</h2>;
        
        if(this.state.cars.length){
            cars = this.state.cars.map(car => <Car 
                key={car.id}
                color={car.color}
                mark={car.mark}
                model={car.model}
                engine={car.engine}
                price={car.price}
            >
                <Button
                    type="button"
                    cssClass="btn btn-danger"
                    inlineCss={{float: 'right'}}
                    clicked={ () => this.onDeleteCarHandler(car.id) }
                >delete</Button>
            </Car>);
        }

        return (
            <Row>
                <Column cssClass="col-lg-8">
                    {
                        cars
                    }
                </Column>
                <Column cssClass="col-lg-4">
                    <AddNewCarForm 
                        values={ this.state.newCar }
                        change={ this.onInputChangeHandler }
                        submit={ this.onSumbitHandler }
                        clicked={ this.onCancelHandler }
                    />
                </Column>
            </Row>
        );
    }
}

export default Cars;
