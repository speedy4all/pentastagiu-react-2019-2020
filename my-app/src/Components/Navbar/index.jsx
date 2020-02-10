import React from 'react';
import './style.css';
import { Link, Route } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="/home" className="navbar-link">Home</Link></li>
          <li><Link to="/About"className="navbar-link">About</Link></li>
          <li><Link to="/Trip" className="navbar-link">Trips</Link></li>
        </ul>
    </nav>
);

export default Navbar;