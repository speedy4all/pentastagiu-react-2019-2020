import React from 'react';
import './App.css';
import { Games } from './components/Games';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      games: [
       {id: 1, name:"Cyberpunk 2077", price:"60$", genre:"First Person Shooter", platform:"PC, PS4, XboxOne"},
       {id: 2, name:"The Last of Us Part II", price:"60$", genre:"Action-adventure", platform: " PS4 "},
       {id: 3, name:"Starcraft II", price:"30$", genre:" Real Time Strategy", multiplayer: "YES", platform: "PC"},
       {id: 4, name:"Call of Duty: Modern Warfare", price:"40$", genre:"First Person Shooter", multiplayer:"YES", platform: "PC, PS4, XboxOne"},
       {id: 5, name:"Assassin's Creed: Odyssey", price:"25$", genre:"Action-adventure", multiplayer: "No", platform:"PC, PS4, XboxOne"}
      ]
    }
  }

  renderGames = () => {
    return this.state.games.map(games => <Games key={games.id} name={games.name} price={games.price} genre={games.genre} multiplayer={games.multiplayer} platform={games.platform} />)
  }
  render() {
    return(
    <div className="App">
      <div className="This-is-definitely-not-a-container">
        {this.renderGames()}
      </div>
      

   

    </div>);

    

  }

  
}