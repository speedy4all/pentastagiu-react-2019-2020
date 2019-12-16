import React from "react";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-light bg-secondary">
      <div className="container">
        <h1 className="navbar-brand mx-auto text-center font-weight-bold text-white">
          {branding}
        </h1>
      </div>
    </nav>
  );
};

export default Header;
