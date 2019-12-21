import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Mountain } from './Components/mountains';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
  this.state = {
    mountains: [
      {id: 1, peak:"Moldoveanu",       mountain:"Fagaras", county:"Sibiu",     height:"2544", cottage: "Villa Balea"},
      {id: 2, peak:"Omu",              mountain:"Bucegi",  county:"Brasov",    height:"2505"},
      {id: 3, peak:"Toaca",            mountain:"Ceahlau", county:"Neamt",     height:"1900"},
      {id: 4, peak:"Retezat",          mountain:"Retezat", county:"Hunedoara", height:"2482"},
      {id: 5, peak:"Pietrosul Rodnei", mountain:"Rodna",   county:"Maramures", height:"2303"}
    ]
  }
}
 renderMountains = () => this.state.mountains.map(mountain => 
   <Mountain 
    peak={mountain.peak} 
    mountain={mountain.mountain} 
    county={mountain.county} 
    height={mountain.height}
    cottage={mountain.cottage}
   />);
 
  render() {
    return(
    <div className="App">
      <div className="mountains-container">
        {this.renderMountains()}
      </div>
    </div>);  
  }
}
