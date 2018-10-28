import React, { Component } from "react";
import "./ProjectCardList.css";
import ProjectCard from "../ProjectCard/ProjectCard";

class ProjectCardList extends Component {
  render() {
    return (
      <div className="projectCardList">
        {this.props.projects.map(project => (
          <div className="card-project" id={project.title} key={project.title}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectCardList;
