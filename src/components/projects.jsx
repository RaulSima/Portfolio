import React, { Component } from "react";
import "../styles/projects.css";
import img from "../assets/He-says-the-thing.png";

class Acceuil extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-background">
          <div className="project-info-container">
            <div style={{ paddingBottom: "30px" }}>
              <video src={video} width="750" height="500" controls></video>
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
