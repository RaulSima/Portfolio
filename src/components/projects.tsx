import React, { Component } from "react";
import "../styles/projects.css";
import game_engine_video from "../assets/C++_Game_Engine.mp4";
import indiana_game_video from "../assets/Demo-jeu-indiana-jones.mov";
import car_img from "../assets/car.jpg";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="projetcs-page-background">
          <div className="project-info-container">
            <video
              className="project-video"
              src={game_engine_video}
              width="550"
              height="308"
              controls
            ></video>
            <div className="info-text">
              (2024) Making a 2D game engine in C++ using SDL 2.
            </div>
          </div>
          <div className="project-info-container">
            <video
              className="project-video"
              src={indiana_game_video}
              width="550"
              height="308"
              controls
            ></video>
            <div className="info-text">
              (2024) Making a game following a Game design document as a
              semester projet for the class LOG725 in colaboration with Ging Sze
              Chan and Nikolas Besner
            </div>
          </div>
          <div className="project-info-container">
            <video
              className="project-video"
              src={game_engine_video}
              width="550"
              height="308"
              controls
            ></video>
            <div className="info-text">
              (2020) Making an application in Java, using materia learned from
              different classes like physics and mathematics throught the course
              of the CEGEP as a final project for the Sciences informatiques et
              Mathematiques program at Collège de Maisonneuve in colaboration
              with Amine Elarabi, Bruno Morin, Shi Yao Wang
            </div>
          </div>
          <div className="project-info-container">
            <img
              className="project-video"
              src={car_img}
              alt="remote controled car"
              width="550"
              height="308"
            />
            <div className="info-text">
              (2020) Making a remote controlled car that can throw frisbees
              using C and autocad and a circuit board designer as a first year
              project for university.
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
