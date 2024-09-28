import React from "react";
import Jobs from "../Jobs.json";

const JobCategories = () => {
  // Get a list of unique job categories using a Set
  const uniqueCategories = [...new Set(Jobs.map((job) => job.category))];

  // Create a count object to keep track of job counts per category
  const jobCount = uniqueCategories.reduce((acc, category) => {
    acc[category] = Jobs.filter((job) => job.category === category).length;
    return acc;
  }, {});

  // Select only the first 8 categories
  const firstEightCategories = uniqueCategories.slice(0, 8);

  return (
    <div className="Categories">
      <div
        className="category-card"
        style={{ borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }}
      >
        <h2>Job Categories:</h2>
      </div>
      {firstEightCategories.map((category, index) => (
        <div
          key={index}
          className="category-card"
          style={{
            marginTop: "0.5%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <h2 style={{ margin: 0 }}>{category}</h2>
          <p style={{ margin: 0, whiteSpace: "nowrap", marginRight: "15px", opacity: 0.5 }}>
            {jobCount[category]} openings
          </p>
        </div>
      ))}
    </div>
  );
};

export default JobCategories;
