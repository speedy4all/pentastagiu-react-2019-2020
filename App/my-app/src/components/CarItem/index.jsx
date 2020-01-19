import * as React from 'react';

export default class CartItem extends React.Component {
    render() {
        return (
            <div className="item">
                <span>Furnizor: {this.props.provider}</span>
                <span>Luna/An: {this.props.date}</span>
                <span>De plata: {this.props.price}</span>
                <span>Scadenta: {this.props.payDate}</span>
            </div>
        )
    }
}