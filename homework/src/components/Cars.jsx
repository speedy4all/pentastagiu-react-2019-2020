import React from 'react';
import { Car } from './Car'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'


export default class Cars extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: [
              {id: 1,
              brand:'Dacia',
              model:'Sandero',
              cm3: '898',
              color: 'ROUGE FUSION',
              description:'Un hatchback cu stil unic.',
              price: 8700
              },
              {id: 2,
              brand:'Dacia',
              model:'Duster',
              cm3: '1332',
              color: 'GRIS HIGHLAND',
            //   description:'Dacia Duster. Mai Duster ca oricând!',
              price: 13500
              },
              {id: 3,
              brand:'Dacia',
              model:'Logan',
              cm3: '898',
              color: 'BLANC GLACIER',
            //   description:'Dacia Logan. Sedanul de familie cu cel mai bun preț!',
              price: 7430
              },
              {id: 4,
              brand:'Dacia',
              model:'Lodgy',
              cm3: '1332',
              color: 'BLEU IRON',
              description:'Mașina de familie cu 7 locuri dinamică și robustă.',
              price: 14100
              },
              {id: 5,
              brand:'Dacia',
              model:'Dokker Van',
              cm3: '1332',
              color: 'BLEU NAVY',
              description:'Furgoneta cu design practic.',
              price: 11785
              }
            ]
        }
    }

    renderCars = () => {
        return this.state.cars.map(car => <Car
            key = {car.id} 
            brand = {car.brand} 
            model = {car.model} 
            cm3 = {car.cm3} 
            color = {car.color} 
            description = {car.description} 
            price = {car.price}
        />)
    }

    render() {
        return(
            <React.Fragment>
                <div className="App-main-paige">
                    <Container>
                        <Row>{this.renderCars()}</Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}
