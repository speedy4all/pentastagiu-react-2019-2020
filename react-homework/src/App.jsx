mport React from 'react';
import './App.css';

import Cars from './components/Cars';

class App extends React.Component {
  constructor(props) {
    super(props);

      this.state = { 
        cars: [
          {
            id: 1,
            marca: 'BMW',
            culoare: 'negru',
            pret: '$10000',
            clima: 'da'
          }, 
          {
            id: 2,
            marca: 'Audi',
            culoare: 'rosu',
            pret: '$4000',
            clima: ''
          }, 
          {
            id: 3,
            marca: 'Dacia',
            culoare: 'galben',
            pret: '$300',
            clima: 'nu exista'
          }, 
          {
            id: 4,
            marca: 'Skoda',
            culoare: 'gri',
            pret: '$3000',
            clima: 'da'
          }, 
          {
            id: 5,
            marca: 'Volkswagen',
            culoare: 'alb',
            pret: '$2500',
            clima: 'da'
          }
        ]
      }
  }

  render() {
    return (
      <div className="App">
        <Cars cars={this.state.cars} />
      </div>
    )
  };
};

export default App;