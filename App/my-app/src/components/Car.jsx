import React from 'react';

export class Car extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='car-item'>
                <span>{this.props.id}. </span>
                <span>Brand: {this.props.name}--</span>
                <span>Color: {this.props.color ? this.props.color : "Nu exista"}--</span>
                <span>Price:{this.props.price}</span>
            </div>);
    }
}