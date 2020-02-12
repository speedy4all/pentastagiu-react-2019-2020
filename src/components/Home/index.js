import React from 'react';
import {Link, Route} from 'react-router-dom';
import User from './user';
import Component from './component';


const RouteId = (props) => (
  <div>
    <h2>Route Id {props.match.params.id}</h2>
  </div>
);

const Home = (props) => {
  console.log(props.match);
  return (
  <div>
    <h2>Home</h2>
    <ul>
      <li>
        <Link to={`${props.match.url}/component`}>Components</Link>
      </li>
      <li>
        <Link to={`${props.match.url}/user`}>User</Link>
      </li>
      <li>
        <Link to={`${props.match.url}/route`}>Route Id</Link>
      </li>

    </ul>
    <Route path="/home/:id" component={RouteId}/>
    <Route exact path="/home/component" component={Component}/>
    <Route exact path="/home/user" component={User}/>
  </div>
)};

export default Home;
