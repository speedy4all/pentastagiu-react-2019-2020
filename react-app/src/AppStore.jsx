import React, { Component } from 'react'
import { AppContext } from './context';

export default class AppStore extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          toys: [],
          itemLoaded: false,
          cartList: [],
          listLoaded: false,
          language: 'en',
        };
      }
    
      componentDidMount() {
        setTimeout( () => {
          this.setState({
            toys: 
              [
                { id: 1, name: 'Masina', price: 150, age: '3-12', culoare: 'Albastru' },
                { id: 2, name: 'Papusa', price: 99, age: '3-12' },
                { id: 3, name: 'Set LEGO', price: 245, age: '8-16' },
                { id: 4, name: 'Set Castel', price: 120, age: '3-10', culoare: 'Gri' },
                { id: 5, name: 'Puzzle', price: 100, age: '6-15' }
              ],
            itemLoaded: true,
            listLoaded: true
          });
        }, 1000 );
      }


    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}