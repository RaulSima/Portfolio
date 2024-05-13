import React, { Component } from "react";
import "../styles/projects.css";
import game_engine_video from "../assets/C++_Game_Engine.mp4";
import indiana_game_video from "../assets/Demo-jeu-indiana-jones.mov";
import car_img from "../assets/car.jpg";
import ProjectVideoContainer from "./common/projectVideoContainer";
import ProjectImageContainer from "./common/projectImageContainer";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="projetcs-page-background">
          <ProjectVideoContainer
            video={game_engine_video}
            description="(2024) Making a 2D game engine in C++ using SDL 2."
          />
          <ProjectVideoContainer
            video={indiana_game_video}
            description="(2024) Making a game following a Game design document as a
            semester projet for the class LOG725 in colaboration with Ging Sze
            Chan and Nikolas Besner"
          />
          <ProjectVideoContainer
            video={game_engine_video}
            description="(2020) Making an application in Java, using materia learned from
            different classes like physics and mathematics throught the course
            of the CEGEP as a final project for the Sciences informatiques et
            Mathematiques program at Collège de Maisonneuve in colaboration
            with Amine Elarabi, Bruno Morin, Shi Yao Wang"
          />
          <ProjectImageContainer
            image={car_img}
            description="(2020) Making a remote controlled car that can throw frisbees
              using C and autocad and a circuit board designer as a first year
              project for university."
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
