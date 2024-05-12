import { Link, NavLink } from "react-router-dom";
import "../styles/navBar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg menu">
      <div className="nav-title nav">
        <Link className="navbar-brand navbar-text" to="/">
          Raul Sima
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
          <NavLink className="nav-item nav-link navbar-text" to="/">
            <i>Home</i>
          </NavLink>
          <NavLink className="nav-item nav-link navbar-text" to="/">
            <i>Portfolio</i>
          </NavLink>
          <NavLink className="nav-item nav-link navbar-text" to="/">
            <i>Resume</i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
