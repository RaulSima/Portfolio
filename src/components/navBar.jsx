import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navBar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/images/logo.png"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg menu">
      <div className="nav-title nav">
        <img className="vd-img" src={logo} alt="app logo"></img>
        <Link className="navbar-brand navbar-text" to="/">
          Vélo-Dingo
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link navbar-text" to="/itineraire">
            Itinéraire
          </NavLink>
          <NavLink className="nav-item nav-link navbar-text" to="/statistiques">
            Statistiques
          </NavLink>
          <NavLink
            className="nav-item nav-link navbar-text"
            to="/points-interets"
          >
            Points d'intérets
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
