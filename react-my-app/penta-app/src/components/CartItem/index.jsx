import * as React from 'react';

export class CartItem extends React.Component {
    render() {
        return (
            <div className='cart-item'>
                <span>{this.props.name} | {this.props.age} ani</span>
                <span>{this.props.price} Lei </span>
            </div>
        );
    }
}