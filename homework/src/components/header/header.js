import React from "react";
import Logo from "../../assets/laptop.svg";

const Header = props => {
  const { branding, headline } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
      <div className="container">
        <img src={Logo} width="40" height="40" alt=""></img>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="false" to="/headline" className="nav-link">
                {headline}
              </a>
            </li>
            <li className="nav-item">
              <a href="false" to="/branding" className="nav-link">
                {branding}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
