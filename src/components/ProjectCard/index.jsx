import React from "react";
import "./ProjectCard.css";

const ProjectCard = props => {
	const linkStyle = {
		color: props.color
	};

	return (
		<div className="project-card-component">
			<span style={linkStyle} className="card-number">
				0{props.number + 1}
			</span>
			<div className="project-card-component--description">
				<div className="project-card-component--title">
					<h2>{props.title}</h2>
				</div>
				<a style={linkStyle} href={props.link}>
					More +
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
