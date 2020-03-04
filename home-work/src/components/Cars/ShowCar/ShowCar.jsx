import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import LocalContext from '../../../context';


const showCar = () => {

    const { carId } = useParams();
    const { cars, currency } = useContext(LocalContext);
    const [ car ] = cars.filter(car => car.id === carId);
    const style = {
        display: 'inline-block',
        width: '50px',
        height: '20px',
        borderRadius: '5%'
    };

    const html = (
        <div className="card-deck">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Show Car</h4>
                    <hr /><br />
                    <dl className="row">
                        <dt className="col-sm-3">Mark</dt>
                        <dd className="col-sm-9">{ car.mark }</dd>
                        <dt className="col-sm-3">Model</dt>
                        <dd className="col-sm-9">{ car.model }</dd>
                        <dt className="col-sm-3">Color</dt>
                        <dd className="col-sm-9">
                            <span style={{ ...style, backgroundColor: car.color}}></span>
                        </dd>
                        <dt className="col-sm-3">Price</dt>
                        <dd className="col-sm-9">{ `${car.price} ${currency}` }</dd>
                    </dl>
                    <hr />
                    <div style={{textAlign: 'center'}}>
                        <a href="https://www.pentalog.ro/brasov" target="_blank" className="card-link">Pentalog</a>
                        <a href="https://reactjs.org/" target="_blank" className="card-link">React JS</a>
                        <a href="https://github.com/" target="_blank" className="card-link">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );

    return html;
}

export default showCar;