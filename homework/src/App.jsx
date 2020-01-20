import React from 'react';
import Cars from './components/CarList/Cars';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Header logo={"/images/logo.png"} title={"Dacia"} subtitle={"Fiabilitate inainte de toate"} />
        <Cars />
      </div>
    );
  }
}

export default App;
