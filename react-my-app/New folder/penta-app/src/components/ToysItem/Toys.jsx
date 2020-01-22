import React from 'react';
import './Toys.css';

export class Toys extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='toys-item'>
                 <span>{this.props.id}. </span>
                 <span><b>{this.props.name}</b> </span>
                 <span>Pret: {this.props.price} LEI | </span>
                 <span>Varsta: {this.props.age} ani | </span>
                 <span>Culoare: {this.props.culoare ? this.props.culoare : 'Nu exista'} </span>
                 <button>Adauga in cos</button>
          </div>
          );
    }
}