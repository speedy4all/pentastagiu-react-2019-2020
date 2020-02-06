import React, { useContext } from 'react';

import { TableCell, TableRow, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import LocalContext from '../../../context';


const car = props => {

    const localContext = useContext(LocalContext);
    
    const style = {
        display: 'inline-block',
        width: '25px',
        height: '25px',
        borderRadius: '50%'
    }

    return (
        <TableRow>
            <TableCell component="th" scope="row">{props.id}</TableCell>
            <TableCell>{props.mark}</TableCell>
            <TableCell>{props.model}</TableCell>
            <TableCell>
                <span style={{ ...style, backgroundColor: props.color }}></span>
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
            </TableCell>
        </TableRow>
    );
}

export default car;