import React from "react";
import CartWidget from "./CartWidget";
import Logo from "./svg/Logo";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to={`/`} className="navbar-brand">
          <Logo color="white" className="header-logo"/>
        </NavLink>
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
              <NavLink to={`/categoria/promociones`} className="nav-link" activeClassName="active">Promociones</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/categoria/cafe`} className="nav-link" activeClassName="active">Café</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/categoria/bar`} className="nav-link" activeClassName="active">Bar</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/categoria/resto`} className="nav-link" activeClassName="active">Resto</NavLink>
            </li>
            <li className="nav-item">
              <Link to={`/cart`} className="nav-link" >
                <CartWidget color="white"/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;