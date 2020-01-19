import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const header = props => {

    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a className="navbar-brand" href="">{props.title}</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="">{props.subtitle}</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default header;