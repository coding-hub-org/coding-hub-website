import React, { Component } from "react";
import "./Section4.css";
import Title from "../Title/Title";
import ProjectCardList from "./ProjectCardList/ProjectCardList";
import Button2 from "../Button2/Button2";

class Section4 extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      projects: [
        {
          image: require("../../main_assets/images/development.svg"),
          title: "Shuttler",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nemo fugit facilis deserunt esse consequuntur facere earum minima exercitationem dolores, molestiae totam voluptate expedita, harum doloremque at optio in est."
        },
        {
          image: require("../../main_assets/images/development.svg"),
          title: "Housing Locator",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nemo fugit facilis deserunt esse consequuntur facere earum minima exercitationem dolores, molestiae totam voluptate expedita, harum doloremque at optio in est."
        },
        {
          image: require("../../main_assets/images/development.svg"),
          title: "ArkAngel",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nemo fugit facilis deserunt esse consequuntur facere earum minima exercitationem dolores, molestiae totam voluptate expedita, harum doloremque at optio in est."
        }
      ]
    };
  }

  viewAllProjects = data => {
    this.setState(prevState => ({
      projects: prevState.projects.concat([
        {
          image: require("../../main_assets/images/development.svg"),
          title: "Club websites",
          description:
            "These are the websites that we made for various clubs in our campus. Some include the Oratory society and the hoola hoop club."
        },
        {
          image: require("../../main_assets/images/development.svg"),
          title: "Rate my tutor",
          description:
            "This website allows users to rate their tutors from the Learning center of our campus. This allows people to find better tutors for a better life."
        }
      ])
    }));
  };

  render() {
    return (
      //this.state.classFile

      <div className="Section4">
        {/* <div className="title-div"> */}
        <Title title="PROJECTS" />
        {/* </div> */}
        <div className="projects">
          <ProjectCardList projects={this.state.projects} />
        </div>
        {this.state.projects.length === 3 && (
          <div className="all-projects-button">
            <Button2 onClicked={this.viewAllProjects} />
          </div>
        )}
      </div>
    );
  }
}

export default Section4;
