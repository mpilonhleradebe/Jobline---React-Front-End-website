import React from "react";
import { lighten } from "polished"; // Import polished
import SpeakerIcon from "../assets/icons/SpeakerIcon.jsx";
import Jobs from "../Jobs.json";
import heart from "../assets/icons/heart.svg"
import locationPin from "../assets/icons/map-pin.svg"
import line from "../assets/icons/minus.svg"
import home from "../assets/icons/home.svg"

const JobDetailCards = () => {
  const colors = [
    "#4CAF50",
    "#FFEB3B",
    "#FF5722",
    "#FF9800",
    "#2196F3",
    "#673AB7",
    "#03A9F4",
    "#E91E63",
    "#FFC107",
    "#9C27B0",
  ];

  const time = [
    "hours",
    "days",
    "minutes"
  ];

  const recentJobs = Jobs.slice(0, 3);

  return (
    <div className="job-cardss">
      {recentJobs.map((job, index) => {
        // Get a random color for each job card
        const themeColor1 = colors[Math.floor(Math.random() * colors.length)];

        // Create a lighter shade of themeColor1
        const lighterShade = lighten(0.4, themeColor1);

        return (
          <div
            key={index}
            className="job-card"
            style={{
              borderRadius: "25px",
              boxShadow: `-4px 0px 1px ${themeColor1}`,
            }}
          >
            <div className="icon-type-time-like">
              <div
                className="icon-box"
                style={{ backgroundColor: lighterShade }}>
                <SpeakerIcon color={themeColor1} />
              </div>

              <p >Type: {job.type}</p> 
              <p>Time: {Math.floor(Math.random() * 31)} {time[Math.floor(Math.random() * 3)]} ago</p>
              <button><img src={heart} alt="like button" /></button>
            </div>

            <div className="job-name-salary">
              <h2>{job.title}</h2>
              <p>{job.salary} / Yearly</p>
            </div>

            <div className="location-company-apply" style={{backgroundColor: lighterShade}}>
              <img src={locationPin} alt="Job location" />
              <p>{job.location}</p>
              <img src={line} alt="vertical line" style={{ transform: "rotate(90deg)" }} />
              {/* <img src={home} alt="Company name" /> */}
              <p>{job.company.name}</p>
              <div className="apply-but">
              <button>Apply Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobDetailCards;
