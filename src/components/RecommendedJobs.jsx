import React, { useState } from "react";
import JobCategories from "./JobCategories";
import JobDetailCards from "./JobDetailCards";
const RecommendedJobs = () => {
  const [isLatest, setIsLatest] = useState(true);
  const [isPremium, setIsPremium] = useState(false);

  return (
      <div className="Recommended-div">
          
          {/* Div to make horizontal */}
      <div className="rec-latest-premium">
        <h2>Recommended Jobs</h2>
        <div className="latest-premium-buttons">
          <button
            onClick={() => {
              setIsLatest(false);
              setIsPremium(true);
            }}
            style={{
              color: isPremium ? "white" : "#3C5E33",
              background: isPremium ? "#3C5E33" : "#F2F2F2",
            }}
          >
            Premium Jobs
          </button>
          <button
            onClick={() => {
              setIsPremium(false);
              setIsLatest(true);
            }}
            style={{
              color: isLatest ? "white" : "#3C5E33",
              background: isLatest ? "#3C5E33" : "#F2F2F2",
            }}
          >
            Latest Jobs
          </button>
        </div>
          </div>

          <p className="explore-text">Explore Suggested Job Searches</p>

          {/*Job categories AND deatails*/}
          <div className="rec-and-details">
          <JobCategories />
        <div className="details">
        <JobDetailCards/>
        </div>
          </div>
          
    </div>
  );
};

export default RecommendedJobs;
