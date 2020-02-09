import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { TableCell, TableRow, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import LocalContext from '../../../context';
import './Car.css';


const car = props => {

    const localContext = useContext(LocalContext);
    
    return (
        <TableRow>
            <TableCell component="th" scope="row">{props.id}</TableCell>
            <TableCell>{props.mark}</TableCell>
            <TableCell>{props.model}</TableCell>
            <TableCell>
                <span className="CarColor" style={{ backgroundColor: props.color }}></span>
            </TableCell>
            <TableCell>
                { `${props.price} ${localContext.currency}` }
            </TableCell>
            <TableCell>
                <Button 
                    variant="outlined" 
                    color="secondary" 
                    size="small"
                    onClick={ () => props.addCartItem(props.id) }
                >
                    <AddShoppingCart />
                </Button>
                <Link to={'/car/' + props.id}>View</Link>
            </TableCell>
        </TableRow>
    );
}

export default car;