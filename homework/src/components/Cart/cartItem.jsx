import React from 'react';
import Col from 'react-bootstrap/Col';
import { LocaleContext } from '../../context';
import Hover from '../Hover';


export default class CartItem extends React.PureComponent {

        // varianta in care nu folosim React.PureComponent
/*
    shouldComponentUpdate(nextProps) {
        return nextProps.brand !== this.props.brand ||
        nextProps.model !== this.props.model ||
        nextProps.color !== this.props.color ||
        nextProps.price !== this.props.price ||
        nextProps.counter !== this.props.counter
    }
*/
    // utilizarea Render Prop in componenta Hover, varianta fara children
    
    render() {
        const { brand, model, color, price, counter, removeFromCart, cartId } = this.props;
        return(
            <LocaleContext.Consumer>
            {contextValue => (
                <Hover render={ isHover => (
                    <div className={`cart-item ${isHover ? "hover" : ""}`}>
                    <Col lg={2}>
                        <span>Brand: {brand} </span>
                    </Col>
                    <Col lg={2}>
                        <span>Model: {model} </span>
                    </Col>
                    <Col lg={3}>
                        <span>Color: {color} </span>
                    </Col>
                    <Col lg={2}>
                        <span>Language: {contextValue.language} </span>
                    </Col>
                    <Col lg={2}>
                        <span>Price: {price} Euro</span>
                    </Col>
                    <Col lg={1}>
                        <span className="badge badge-primary counter"> {counter} </span>
                    </Col>
                    <span className="delete-button" onClick={removeFromCart.bind(this, cartId)} >&times;</span>
                </div>
                )} 
                />
            )}
        </LocaleContext.Consumer>
        );
    }
}
