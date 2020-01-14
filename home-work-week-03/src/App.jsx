import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header.jsx';
import Cars from './components/Cars/Cars.jsx';
import Cart from './components/Cart/Cart.jsx';


class App extends Component {

  constructor(){
    super();

    this.state = {
      header: {
        title: 'Cars',
        subtitle: 'Cars List'
      }
    }
  }

  render() {
    return (
      <div className="container">

        <Header { ...this.state.header } />

        <br /><br />
        
        <div className="row">
          <div className="col-md-4">

            <Cart />

          </div>
          <div className="col-md-8">

            <Cars />
          
          </div>
        </div>
      
      </div>
    );
  }
}

export default App;
