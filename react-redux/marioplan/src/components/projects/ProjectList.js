import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
  return (
    <div className="project-list section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />

      {/* <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project Title 2</span>
          <p>Posted by the Net Ninja</p>
          <p className="grey-text">3rd September , 2am</p>
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project Title 3</span>
          <p>Posted by the Net Ninja</p>
          <p className="grey-text">3rd September , 2am</p>
        </div>
      </div> */}
    </div>
  );
};

export default ProjectList;
