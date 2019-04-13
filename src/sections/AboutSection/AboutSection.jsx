import React from "react";
import "./AboutSection.css";
import Title from "../../components/Title/Title";

const AboutSection = () => {
	return (
		<div id={"about"} className="about-section">
			<Title title="About" />
			<div className="about-section--wrapper">
				<p>
					Coding Hub is a club at{" "}
					<a href="https://www.plattsburgh.edu/">SUNY Plattsburgh</a> dedicated
					to develop software solutions, web and mobile applications, to improve
					the services on Campus. We also offer build portfolio websites for
					students and provide resources for anyone who is interested in
					learning how to code. If you are a student at SUNY Plattsburgh and
					would like to join us, come to Beaumont Hall 205 every Thursday at
					6:30pm.
				</p>
			</div>
		</div>
	);
};

export default AboutSection;
