import React from 'react';
import './style.css';
import { Link, Route } from 'react-router-dom';
import MountainList from '../mountainsList';
import SpaResort from './spaResort';
import SeaTrip from './seaTrip';


const Trip = ({match}) => {
    return(
    <div>
        <h2>Vacante</h2> 
        <ul className="navbar-trip-links">
            <li><Link to={`${match.url}/mountain`}>Vacante la munte</Link></li>
            <li><Link to={`${match.url}/spa`}>Statiuni balneo</Link></li>
            <li><Link to={`${match.url}/seaTrip`}>Vacante litoral</Link></li>
        </ul>
        {/* <switch>
        <Route exact path={`${match.path}/spa`} component={SpaResort}/>
        <Route exact path={`${match.path}/seaTrip`} component={SeaTrip}/>
        </switch> */}
    </div>
)};

export default Trip;