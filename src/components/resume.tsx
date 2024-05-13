import React, { Component } from "react";
import "../styles/resume.css";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/material/Typography";
import TimelineItemLeft from "./common/timelineItemLeft";
import TimelineItemRight from "./common/timelineItemRight";

class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="resume-page-background">
          <div className="resume-timeline-container">
            <Timeline position="alternate">
              <TimelineItemLeft
                time="2018 (juin)"
                title="DES (Diplôme d'études secondaires)"
                description="Collège St-Jean-Vianney"
                icon={<SchoolIcon />}
              />
              <TimelineItemLeft
                time="2018 (September)"
                title="Start of Cégep at"
                description="Collège de Maisonneuve"
                icon={<SchoolIcon />}
              />
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="h5"
                  color="text.secondary"
                >
                  2019 (August)
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary" variant="outlined">
                    <HotelIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Sleep
                  </Typography>
                  <Typography>Because you need rest</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  <TimelineDot color="secondary">
                    <RepeatIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Repeat
                  </Typography>
                  <Typography>Because this is the life you love!</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;
