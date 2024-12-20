import React, { Component } from "react";
import "../styles/resume.css";
import { Timeline, TimelineDot } from "@mui/lab";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import TimelineItemComponent from "./common/timelineItemComponent";

const Resume = () => {
  return (
    <React.Fragment>
      <div className="resume-page-background">
        <div className="resume-timeline-container">
          <Timeline position="alternate">
            <TimelineItemComponent
              time="2018"
              title="DES (Diplôme d'études secondaires)"
              description="Collège St-Jean-Vianney"
              icon={
                <TimelineDot color="primary">
                  <SchoolIcon />
                </TimelineDot>
              }
            />
            <TimelineItemComponent
              time="2018"
              title="Start of Cégep at"
              description="Collège de Maisonneuve"
              icon={
                <TimelineDot color="primary">
                  <SchoolIcon />
                </TimelineDot>
              }
            />
            <TimelineItemComponent
              time="2019"
              title="Coding animator"
              description="animator of a program that was set to teach elementary school students the basics of coding through Scratch at Collège de Maisonneuve"
              icon={
                <TimelineDot color="secondary">
                  <LaptopMacIcon />
                </TimelineDot>
              }
            />
            <TimelineItemComponent
              time="2020"
              title="Coding animator"
              description="animator of a program that was set to teach high school students the basics of coding through JavaScript at Collège de Maisonneuve"
              icon={
                <TimelineDot color="secondary">
                  <LaptopMacIcon />
                </TimelineDot>
              }
            />
            <TimelineItemComponent
              time="2020"
              title="DEC (Diplôme d'études collégiales)"
              description="Collège de Maisonneuve"
              icon={
                <TimelineDot color="primary">
                  <SchoolIcon />
                </TimelineDot>
              }
            />
            <TimelineItemComponent
              time="2020"
              title="Start of University"
              description="At ETS (École de technologie supérieure)"
              icon={
                <TimelineDot color="primary">
                  <SchoolIcon />
                </TimelineDot>
              }
            />
            <TimelineItemComponent
              time="2022"
              title="Backend developper (C#, .NET) Internship"
              description="At UMAKnow"
              icon={
                <TimelineDot color="secondary">
                  <LaptopMacIcon />
                </TimelineDot>
              }
            />
            <TimelineItemComponent
              time="2023"
              title="Full Stack developper (TypeScrpt, Angular, C#, .NET, Docker, Jira, Bitbucket, SPA, micro-service architecture) Internship"
              description="At Nomadis"
              icon={
                <TimelineDot color="secondary">
                  <LaptopMacIcon />
                </TimelineDot>
              }
            />
            <TimelineItemComponent
              time="2023-2024"
              title="Part-Time Full Stack developper Internship"
              description="At Nomadis"
              icon={
                <TimelineDot color="secondary">
                  <LaptopMacIcon />
                </TimelineDot>
              }
            />
            <TimelineItemComponent
              time="2024"
              title="Block Magic Hakaton"
              description="At ChainLink"
              icon={
                <TimelineDot color="secondary">
                  <LaptopMacIcon />
                </TimelineDot>
              }
            />
            <TimelineItemComponent
              time="2024"
              title="Online developper (Typescrypt, AWS, JIRA, Opensearch, API service) Internship"
              description="At Ubisoft"
              icon={
                <TimelineDot color="secondary">
                  <LaptopMacIcon />
                </TimelineDot>
              }
            />
            <TimelineItemComponent
              time="2024"
              title="Obtention of Software Engineer Bachelor degree"
              description="At ETS (École de technologie supérieure)"
              icon={
                <TimelineDot color="primary">
                  <SchoolIcon />
                </TimelineDot>
              }
            />
          </Timeline>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resume;
