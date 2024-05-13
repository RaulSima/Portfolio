import React, { Component } from "react";
import "../styles/projects.css";
import game_engine_video from "../assets/C++_Game_Engine.mp4";

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
              Start of Making a 2D game engine in C++ using SDL 2.
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
              Making a game following a Game design document as a semester
              projet in colaboration with Ging Sze Chan and Nikolas Besner
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
            <div className="info-text">project 3</div>
          </div>
          <div className="project-info-container">
            <video
              className="project-video"
              src={game_engine_video}
              width="550"
              height="308"
              controls
            ></video>
            <div className="info-text">project 4</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
