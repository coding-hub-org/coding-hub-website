import React, { Component } from "react";
import "./Section4.css";
import Title from "../Title/Title";
import ProjectCardList from "./ProjectCardList/ProjectCardList";
import Button2 from "../Button2/Button2";
import ScrollableAnchor from "react-scrollable-anchor";

class Section4 extends Component {
  /////////////*****//////////////*****//////////////*****//////////////*****//////////////*****//////////////*****//////////////*****//////////////*****/
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image: require("../../main_assets/images/ic_shuttler.png"),
          title: "Shuttler",
          description:
            "This application is developed to help hundreds of students on campus to track the location of the campus shuttle. It helps save student time by notifying them exactly when the shuttle reaches the location they specified in their preferences."
        },
        {
          image: require("../../main_assets/images/development.svg"),
          title: "Housing Locator",
          description:
            "This application is aimed to help students on and off campus to find housing. Instead of personally going to talk to individual house owners or resident halls, they can filter housing based on their preferences simplifying the process of finding a place to live."
        },
        {
          image: require("../../main_assets/images/development.svg"),
          title: "Club websites",
          description:
            "These are the websites that we plan to make for various clubs in our campus. This allows club to have a personal space for posting notices and advertise their events to their members."
        }
      ]
    };
  }
  /////////////*****//////////////*****//////////////*****//////////////*****//////////////*****//////////////*****//////////////*****/
  viewAllProjects = data => {
    this.setState(prevState => ({
      projects: prevState.projects.concat([
        {
          image: require("../../main_assets/images/development.svg"),
          title: "ArkAngel",
          description: "The project plan is still in progress."
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
      <ScrollableAnchor id={"Projects"}>
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
      </ScrollableAnchor>
    );
  }
}

export default Section4;
