import React, { Component } from 'react';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper 
} from '@material-ui/core';

import Car from './Car/Car.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import LocalContext from '../../context';


class Cars extends Component {

    static contextType = LocalContext;

    showCars = () => {
        return this.context.cars.map(car => <Car key={car.id} {...car} addCartItem={ this.context.addCartItem } />);
    }

    render() {

        let html = (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Mark</TableCell>
                            <TableCell>Model</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>#</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.showCars()
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        );

        if (this.context.loadingCars) {
            html = <Spinner />;
        }

        return html;
    }
}

export default Cars;
