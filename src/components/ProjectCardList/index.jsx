import React, { Component } from "react";
import "./ProjectCardList.css";
import ProjectCard from "../ProjectCard";

class ProjectCardList extends Component {
	render() {
		return (
			<div className="project-card-list-component">
				{this.props.projects.map((project, idx) => (
					<div className="card-project" id={project.title} key={idx}>
						<ProjectCard {...project} number={idx} />
					</div>
				))}
			</div>
		);
	}
}

export default ProjectCardList;
