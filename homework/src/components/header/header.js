import React from "react";
import Logo from "../../assets/laptop.svg";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding, headline } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
      <div className="container">
        <Link to="/">
          <img src={Logo} width="40" height="40" alt=""></img>
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/Refurbished" className="nav-link">
                {headline}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                {branding}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
