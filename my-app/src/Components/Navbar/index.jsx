import React from 'react';
import './style.css';
import { NavLink, Route } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
        <ul className="navbar-links">
          <li><NavLink to="/" className="navbar-link">Home</NavLink></li>
          <li><NavLink to="/about"className="navbar-link">About</NavLink></li>
          <li><NavLink to="/trip" className="navbar-link">Trips</NavLink></li>
        </ul>
    </nav>
);

export default Navbar;