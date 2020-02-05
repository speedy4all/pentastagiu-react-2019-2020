import React, { Component } from 'react';
import Toys from '../ToysItem';
import {AppContext} from '../../context';

export default class ToysList extends Component {
  static contextType = AppContext

    render() { 
        return (
        <div className='list-container'>
        {this.context.items.map(toys => (
                <Toys
                  key={toys.id}
                  {...toys} 
                /> 
        ))}
        </div>
      );
  };
}