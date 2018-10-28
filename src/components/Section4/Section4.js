import React from "react";
import "./Section4.css";
import Title from "../Title/Title";
import ProjectCardList from "./ProjectCardList/ProjectCardList";
import Button2 from "../Button2/Button2";

const section4 = props => (
  <div className="Section4">
    <div className="title-div">
      <Title title="PROJECTS" />
    </div>
    <div className="projects">
      <ProjectCardList />
    </div>
    <div className="all-projects-button">
      <Button2 />
    </div>
  </div>
);

export default section4;
