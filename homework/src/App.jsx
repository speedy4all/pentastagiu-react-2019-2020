import React from 'react';
import Cars from './components/Cars';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Header />
        <Cars />
      </div>
    );
  }
}

export default App;
