import React from 'react';
import './style.css';
import { Link, Route } from 'react-router-dom';
import MountainList from '../mountainsList';
import SpaResort from './spaResort';
import SeaTrip from './seaTrip';


const Trip = ({match}) => {
    return(
    <div>
        <h2>Trips</h2> 
        <ul className="navbar-trip-links">
            <li><Link to={`${match.url}/mountain`}>Mountains</Link></li>
            <li><Link to={`${match.url}/spa`}>SPA Resorts</Link></li>
            <li><Link to={`${match.url}/seaTrip`}>Sea Trips</Link></li>
        </ul>
        {/* <switch>
        <Route exact path={`${match.path}/spa`} component={SpaResort}/>
        <Route exact path={`${match.path}/seaTrip`} component={SeaTrip}/>
        </switch> */}
    </div>
)};

export default Trip;