import React from 'react';
import Col from 'react-bootstrap/Col';


export default class CartItem extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.brand !== this.props.brand ||
        nextProps.model !== this.props.model ||
        nextProps.color !== this.props.color ||
        nextProps.price !== this.props.price ||
        nextProps.counter !== this.props.counter
    }
    
    
    render() {
        // console.log(this.props.counter);
        return(
            <div className="cart-item">
                <Col lg={2}>
                    <span>Brand: {this.props.brand} </span>
                </Col>
                <Col lg={3}>
                    <span>Model: {this.props.model} </span>
                </Col>
                <Col lg={3}>
                    <span>Color: {this.props.color} </span>
                </Col>
                <Col lg={2}>
                    <span>Price: {this.props.price} Euro</span>
                </Col>
                <Col lg={2}>
                    <span className="badge badge-primary counter"> {this.props.counter} </span>
                </Col>
                <span className="delete-button" onClick={this.props.removeFromCart.bind(this, this.props.cartId)} >&times;</span>
            </div>
        );
    }
}