import React, { Component } from "react";
import Title from "../../components/Title";
import ProjectCardList from "../../components/ProjectCardList";

import "./ProjectsSection.css";

class ProjectSection extends Component {
	constructor(props) {
		super(props);

		this.projects = [
			{
				title: "Shuttler App",
				color: "#E50914",
				link: "https://www.psushuttle.com/",
				description:
					"This application is developed to help hundreds of students on campus to track the location of the campus shuttle. It helps save student time by notifying them exactly when the shuttle reaches the location they specified in their preferences."
			},
			{
				title: "Housing Locator",
				color: "#FFC453",
				description:
					"This application is aimed to help students on and off campus to find housing. Instead of personally going to talk to individual house owners or resident halls, they can filter housing based on their preferences simplifying the process of finding a place to live."
			},
			{
				title: "Club websites",
				color: "#FF4099",
				link: "https://coding-hub.com",
				description:
					"These are the websites that we plan to make for various clubs in our campus. This allows club to have a personal space for posting notices and advertise their events to their members."
			},
			{
				title: "ArkAngel",
				color: "#222B8E",
				description: "The project plan is still in progress."
			},
			{
				title: "Rate my tutor",
				color: "#00C8B4",
				description:
					"This website allows users to rate their tutors from the Learning center of our campus. This allows people to find better tutors for a better life."
			}
		];
	}

	render() {
		return (
			<div id="projects" className="project-section">
				<div className="project-section-wrapper">
					<Title title="Projects" />
					<div className="projects ">
						<ProjectCardList projects={this.projects} />
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectSection;
