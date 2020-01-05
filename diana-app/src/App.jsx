import React from 'react';
import './App.css';
import { Movies } from './components/Movies';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [
       {id: 1, name:"A walk to remember", price:"50", time:"138", type:"Romantic", director:" Adam Shankman"},
       {id: 2, name:"Kill Bill", price:"100", time:"170", director: " Quentin Tarantino"},
       {id: 3, name:"Casablanca", price:"190", time:"200", type: "Romantic", director:" Michael Curtiz"},
       {id: 4, name:"Deadpool", price:"200", time:"159", type:"Action"},
       {id: 5, name:"A star is born", price:"150", time:"140", type: "Drama"},
      ]
    }
  }

  renderMovies = () => {
    return this.state.movies.map(movies => <Movies key={movies.id} name={movies.name} price={movies.price} time={movies.time} director={movies.director} type={movies.type} />)
  }
  render() {
    return(
    <div className="App">
      <div className="cinema-container">
        {this.renderMovies()}
      </div>
    </div>);
  }
}

