import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from '../../Button/Button.jsx';
import LocalContext from '../../../context';


const cartItem = props => {

    const localContext = useContext(LocalContext);

    const style = {
        padding: '10px',
        margin: '5px 10px 10px',
        minWidth: '300px',
        maxWidth: '350px',
        border: '1px solid ' + props.color
    };

    return (
        <div style={ style }>
            <span>Produs: { props.product }</span>
            <br />
            <span>Pret: { `${props.price} ${localContext.currency}` }</span>
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
        </div>
    );
}

export default cartItem;
