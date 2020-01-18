import React from 'react';

export class Household extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='household-item'>
                <span>{this.props.id}. </span>
                <span>Name:{this.props.name}--</span>
                <span>Recommandations: {this.props.recommendations ? this.props.recommendations : "It can be used on all types of surfaces"}--</span>
                <span>Number of items: {this.props.noOfItems}--</span>
                <span>Price:{this.props.price}</span>
            </div>);
    }
}