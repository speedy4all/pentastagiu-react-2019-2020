import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Song} from './Components/Song.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs:[
        {name:"Otherside",genre:"Rock",duration:"4:15",band:"RHCP"},
        {name:"Holiday",genre:"Rock",duration:"3:53",band:"Green Day"},
        {name:"Still Waiting",genre:"Rock",duration:"2:38",band:"Sum 41"},
        {name:"Happy Birthday",genre:"Birthday",duration:"13:05"},
        {name:"Before I Forget",genre:"Rock",duration:"4:39",band:"Slipknot"},
      ]
    }
  }

  getSongsComponents(){
    return this.state.songs.map(song=>{
      return <Song name={song.name} genre={song.genre} duration={song.duration} band={song.band} />;
    })
  }

  render(){
    return(
      <div class="App">
        {this.getSongsComponents()}
      </div>
    );
  }
}
