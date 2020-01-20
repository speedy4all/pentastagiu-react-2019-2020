import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from '../../Button/Button.jsx';


const cartItem = props => {

    const style = {
        display: 'block',
        padding: '10px',
        margin: '5px 10px',
        border: '1px solid ' + props.color
    };

    return (
        <span style={ style }>

            <span>Produs: { props.product }</span>
            <br />
            <span>Pret: { props.price }</span>
            <br />
            <span>Data comenzii: { props.date }</span>
            <br />
            <span>Cumparator: { props.customer }</span>
            <br />
            <span>Adresa: { props.address }</span>

            <hr />

            <div className="row">
                <div className="col-md-3">
                    <Button 
                        btnType="danger"
                        onClickHandler={() => props.decreaseCartItemProduct(props.id)}
                    >
                        {
                            props.productsNumber < 1 ? 'DELETE' : 'MINUS'
                        }
                    </Button>
                </div>
                <div className="col-md-6" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    { props.productsNumber }
                </div>
                <div className="col-md-3">
                    <Button 
                        btnType="primary"
                        value={props.id}
                        onClickHandler={() => props.increaseCartItemProduct(props.id)}
                    >
                        PLUS
                    </Button>
                </div>
            </div>

        </span>
    );
}

export default cartItem;
