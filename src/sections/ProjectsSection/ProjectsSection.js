import React, { Component } from "react";
import Title from "../../components/Title/Title";
import ProjectCardList from "../../components/Section4/ProjectCardList/ProjectCardList";

import "./ProjectsSection.css";

class ProjectSection extends Component {
	state = {
		projects: [
			{
				image: require("../../main_assets/images/ic_shuttler.png"),
				title: "Shuttler App",
				color: "#E50914",
				description:
					"This application is developed to help hundreds of students on campus to track the location of the campus shuttle. It helps save student time by notifying them exactly when the shuttle reaches the location they specified in their preferences."
			},
			{
				image: require("../../main_assets/images/housing_locator.png"),
				title: "Housing Locator",
				color: "#FFC453",
				description:
					"This application is aimed to help students on and off campus to find housing. Instead of personally going to talk to individual house owners or resident halls, they can filter housing based on their preferences simplifying the process of finding a place to live."
			},
			{
				image: require("../../main_assets/images/development.svg"),
				title: "Club websites",
				color: "#FF4099",
				description:
					"These are the websites that we plan to make for various clubs in our campus. This allows club to have a personal space for posting notices and advertise their events to their members."
			},
			{
				image: require("../../main_assets/images/development.svg"),
				title: "ArkAngel",
				color: "#1809E5",
				description: "The project plan is still in progress."
			},
			{
				image: require("../../main_assets/images/rate_my_tutor.png"),
				title: "Rate my tutor",
				color: "#00C8B4",
				description:
					"This website allows users to rate their tutors from the Learning center of our campus. This allows people to find better tutors for a better life."
			}
		]
	};

	render() {
		return (
			<div className="project-section">
				<div className="project-section-wrapper">
					<Title title="PROJECTS" />
					<div className="projects">
						<ProjectCardList projects={this.state.projects} />
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectSection;
