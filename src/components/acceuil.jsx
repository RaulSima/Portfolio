import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/acceuil.css";

class Acceuil extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-background">
          <div className="ac-title">Bienvenue sur</div>
          <div className="project-name">Vélo-Dingo</div>
          <div className="button-container">
            <button className="button">
              <Link className="button-text" to="/equipe">
                L'équipe
              </Link>
            </button>
            <button className="button">
              <Link className="button-text" to="/savoir-plus">
                En savoir plus
              </Link>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Acceuil;
