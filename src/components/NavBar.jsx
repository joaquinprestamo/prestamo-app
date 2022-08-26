import React from "react";
import CartWidget from "./CartWidget";
import Logo from "./svg/Logo";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Logo color="white" className="header-logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>        
        <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Café
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Bar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <CartWidget color="white"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;