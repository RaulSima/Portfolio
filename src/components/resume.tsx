import React, { Component } from "react";
import "../styles/resume.css";
import { Timeline } from "@mui/lab";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import TimelineItemComponent from "./common/timelineItemRight";

class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="resume-page-background">
          <div className="resume-timeline-container">
            <Timeline position="alternate">
              <TimelineItemComponent
                time="2018 (Juin)"
                title="DES (Diplôme d'études secondaires)"
                description="Collège St-Jean-Vianney"
                icon={<SchoolIcon />}
              />
              <TimelineItemComponent
                time="2018 (September)"
                title="Start of Cégep at"
                description="Collège de Maisonneuve"
                icon={<SchoolIcon />}
              />
              <TimelineItemComponent
                time="2019 (September-December)"
                title="Coding animator"
                description="animator of a program that was set to teach elementary school students the basics of coding through Scratch at Collège de Maisonneuve"
                icon={<LaptopMacIcon />}
              />
              <TimelineItemComponent
                time="2020 (February-March)"
                title="Coding animator"
                description="animator of a program that was set to teach high school students the basics of coding through JavaScript at Collège de Maisonneuve"
                icon={<LaptopMacIcon />}
              />
              <TimelineItemComponent
                time="2020 (Juin)"
                title="DEC (Diplôme d'études collégiales)"
                description="Collège de Maisonneuve"
                icon={<SchoolIcon />}
              />
              <TimelineItemComponent
                time="2020 (September)"
                title="Start of University"
                description="At ETS (École de technologie supérieure)"
                icon={<SchoolIcon />}
              />
              <TimelineItemComponent
                time="2022 (January-April)"
                title="Backend developper (C#, .NET) Internship"
                description="At UMAKnow"
                icon={<LaptopMacIcon />}
              />
              <TimelineItemComponent
                time="2023 (January-august)"
                title="Full Stack developper (TypeScrpt, Angular, C#, .NET) Internship"
                description="At Nomadis"
                icon={<LaptopMacIcon />}
              />
              <TimelineItemComponent
                time="2023-2024 (September-February)"
                title="Part-Time Full Stack developper (TypeScrpt, Angular, C#, .NET) Internship"
                description="At Nomadis"
                icon={<LaptopMacIcon />}
              />
              <TimelineItemComponent
                time="2024 (May)"
                title="Block Magic Hakaton"
                description="At ChainLink"
                icon={<LaptopMacIcon />}
              />
            </Timeline>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;
