import React from 'react';
import Col from 'react-bootstrap/Col';

export class Car extends React.Component {

    render() {

        return(
            <Col sm={6} lg={4}>
                <div className="car-container">
                    <span className="brand-model">{this.props.brand}</span>
                    <span className="brand-model">{this.props.model}</span>
                    <div>Caracteristici:</div>
                    <div>Motorizare: {this.props.cm3} cm3 </div>
                    <div>Culoare: {this.props.color} </div>
                    <div>Descriere: {this.props.description ? this.props.description : "Nu exista descriere disponibila."}</div>
                    <div>Pret: {this.props.price} euro</div>
                </div>
            </Col>
        );
    }
}
