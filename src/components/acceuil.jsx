import React, { Component } from "react";
import "../styles/acceuil.css";
import img from "../assets/He-says-the-thing.png";

class Acceuil extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-background">
          <div className="info-container">
            <div style={{ paddingBottom: "30px" }}>
              <h1>Hello There!</h1>
              <img src={img}></img>
            </div>
            <div className="info-text">
              I'm Raul Sima, a student and soon a detainer of a bachelor's
              degree in Software Engineering from École de technologie
              supérieure (ÉTS). I am interested in physics simulations and Video
              game engines. I have a lot of experience with high level language,
              like python, as well as low level languages, like C/C++.
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Acceuil;
