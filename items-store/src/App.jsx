import React, {Component} from 'react';
import Cars from './components/Cars/Cars';
import Toys from './components/Toys/Toys';
import './App.css';
import TVs from './components/TVs/TVs';

class App extends Component {
  render(){
    return(
      <div>
        <Cars/>
        <Toys/>
        <TVs/>
      </div>
    )
  }
}

export default App;
