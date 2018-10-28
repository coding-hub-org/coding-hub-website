import React, { Component } from "react";
import "./ProjectCardList.css";
import ProjectCard from "../ProjectCard/ProjectCard";

class ProjectCardList extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      projects: [
        {
          image: require("../../../main_assets/images/development.svg"),
          title: "Shuttler",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nemo fugit facilis deserunt esse consequuntur facere earum minima exercitationem dolores, molestiae totam voluptate expedita, harum doloremque at optio in est."
        },
        {
          image: require("../../../main_assets/images/development.svg"),
          title: "Housing Locator",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nemo fugit facilis deserunt esse consequuntur facere earum minima exercitationem dolores, molestiae totam voluptate expedita, harum doloremque at optio in est."
        },
        {
          image: require("../../../main_assets/images/development.svg"),
          title: "ArkAngel",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nemo fugit facilis deserunt esse consequuntur facere earum minima exercitationem dolores, molestiae totam voluptate expedita, harum doloremque at optio in est."
        }
      ]
    };
  }

  render() {
    return (
      <div className="projectCardList">
        {this.state.projects.map(project => (
          <div className="card-project" id={project.title} key={project.title}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectCardList;
