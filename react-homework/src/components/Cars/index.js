import React from 'react';

class Cars extends React.Component {
  render() {
    return (
      <div className="Cars">
        {this.props.cars.map(car => {
          return (
            <div key={car.id}>
              <h3>Marca: {car.marca}</h3>
              <p>Culoare: {car.culoare}</p>
              <p>Pret: {car.pret}</p>
              <p>Clima: {car.clima}</p>
            </div>
          )
        })}
      </div>
    );
  };
};

export default Cars;