import React, { Component } from "react";
import "../styles/acceuil.css";

class Acceuil extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-background">
          <div className="info-container">
            <div className="info-title">
              <h1>Hello There!</h1>
            </div>
            <div className="info-text">
              My name is Raul Sima and I am a student, soon to be graduate
              (2024) with a bachelor's degree in Software Engineering from ETS
              (École de technologie supérieure). I am interested in physics
              simulations and Video game engines. I have extensive experience
              working with both low level (C/C++) and high level language
              (python).
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Acceuil;
