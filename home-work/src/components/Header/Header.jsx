import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LocalContext from '../../context';


const header = () => {

    const localContext = useContext(LocalContext);

    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link to="/" className="navbar-brand">{localContext.header.title}</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                {
                    localContext.header.links.map(link => (
                        <li className="nav-item" key={link.name + '' + link.path}>
                            <Link to={link.path} className="nav-link active">{link.name}</Link>
                        </li>
                    ))
                }
                </ul>
            </div>
        </nav>
    );
}

export default header;