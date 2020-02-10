import React from 'react';
import './style.css';
import { Link, Route } from 'react-router-dom';
import MountainList from '../mountainsList';
import SpaResort from './spaResort';
import SeaTrip from './seaTrip';


const Trip = (props) => {
    // console.log(props.match);
    return(
    <div>
        <h2>Trips</h2> 
        <ul className="navbar-trip-links">
            <li><Link to={`${props.match.url}/mountain`}>Mountains</Link></li>
            <li><Link to={`${props.match.url}/spa`}>SPA Resorts</Link></li>
            <li><Link to={`${props.match.url}/seaTrip`}>Sea Trips</Link></li>
        </ul>
        <Route exact path='/trip/spa' component={SpaResort}/>
        <Route exact path='/trip/seaTrip' component={SeaTrip}/>
    </div>
)};

export default Trip;