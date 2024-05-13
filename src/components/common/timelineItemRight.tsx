import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import { Typography } from "@mui/material";

type ComponentProps = {
  time: string;
  title: string;
  description: string;
  icon: any;
};

const TimelineItemRight = ({
  time,
  title,
  description,
  icon,
}: ComponentProps) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="h5"
        color="text.secondary"
      >
        {time}
      </TimelineOppositeContent>
      {/* node in the time line with line above and below */}
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>{icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6" component="span">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineItemRight;
