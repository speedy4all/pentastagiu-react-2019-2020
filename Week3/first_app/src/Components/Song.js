import React from 'react';
import '../App.css';

export class Song extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div class="song">
            <h2>Name: {this.props.name}</h2>
            <h2>Genre: {this.props.genre}</h2>
            <h2>Duration: {this.props.duration}</h2>
            <h2>Band: {this.props.band ? this.props.band : "Nu exista"}</h2>
        </div>
    );
  }
}
