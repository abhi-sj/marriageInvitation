import React from "react";
import "./story.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TrainIcon from "@mui/icons-material/Train";
import PeopleIcon from "@mui/icons-material/People";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FastfoodIcon from "@mui/icons-material/Fastfood";

import Typography from "@mui/material/Typography";

const story = () => {
  return (
    <section id="story">
      <div className="section__title">
        <h5 style={{ fontSize: "1.2rem" }}>Get to know</h5>
        <h1
          style={{
            fontSize: "3rem",
          }}
        >
          Our story
        </h1>
      </div>
      <div className="container about__container">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot variant="outlined">
                <PeopleIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "25px", px: 2 }}>
              <Typography style={{ fontFamily: "Titillium Web, sans-serif" }}>
                Two seperate individuals living their own life. It was that
                point in life where both of us looking for a partner.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot variant="outlined">
                <TrainIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "25px", px: 2 }}>
              <Typography style={{ fontFamily: "Titillium Web, sans-serif" }}>
                I was on sitting in a train considering a normal day and that
                when it happened. I saw her sitting opposite to me. We exchanged
                a 'Hi'
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot variant="outlined">
                <FastfoodIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "25px", px: 2 }}>
              <Typography style={{ fontFamily: "Titillium Web, sans-serif" }}>
                Food connects us well and we made that as a excuse to meet twice
                every week and explored different food spots.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot variant="outlined">
                <FavoriteIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "25px", px: 2 }}>
              <Typography style={{ fontFamily: "Titillium Web, sans-serif" }}>
                To keep this dating forever I proposed her and she said YES.
                This embarks our journey.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
};

export default story;
