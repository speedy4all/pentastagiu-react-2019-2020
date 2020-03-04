import React from 'react';
import { Link, Route } from 'react-router-dom';
import Component from './component';
import User from './user';
import Contact from './contact';

const Home = () => (
    <div>
        <h2>Home</h2>
        <ul>
            <li>
                <Link to='/home/component' > Components </Link>
            </li>
            <li>
                <Link to='/home/user' > Users </Link>
            </li>
            <li>
                <Link to='/home/contact' > Contact </Link>
            </li>
        </ul>

        <Route path='/home/component' component={Component} />
        <Route path='/home/user' component={User} />
        <Route path='/home/contact' component={Contact} />
    </div>
);

export default Home;