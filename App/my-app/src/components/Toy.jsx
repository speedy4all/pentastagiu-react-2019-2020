import React from 'react';

export class Toy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='toy-item'>
                <span>{this.props.id}. </span>
                <span>Name: {this.props.name}--</span>
                <span>Recommended age: {this.props.recommendedAge}--</span>
                <span>Recommended gender: {this.props.recommendedGender ? this.props.recommendedGender : "unisex"}--</span>
                <span>Price: {this.props.price}</span>
            </div>);
    }
}