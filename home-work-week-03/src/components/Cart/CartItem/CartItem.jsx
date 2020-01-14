import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const cartItem = props => {

    const style = {
        display: 'block',
        padding: '10px',
        margin: '5px 10px'
    };

    return (
        <span className={ 'border border-' + props.color } style={ style }>
            <span>Produs: { props.product }</span>
            <br />
            <span>Pret: { props.price }</span>
            <br />
            <span>Data comenzii: { props.date }</span>
            <br />
            <span>Cumparator: { props.customer }</span>
            <br />
            <span>Adresa: { props.address }</span>
        </span>
    );
}

export default cartItem;
