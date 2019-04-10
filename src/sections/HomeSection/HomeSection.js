import React from "react";
import "./HomeSection.css";

import Navbar from "../../components/Navbar";
import landing_img from "../../main_assets/images/landing_img.png";

const HomeSection = () => {
	return (
		<div className={"home-section"}>
			<Navbar />
			<div className="home-section--wrapper">
				<div className="home-section-left">
					<h1>Coding Hub</h1>
					<h1>Software solutions for students by students</h1>
					<a href="#contact">CONTACT US</a>
				</div>
				<div className="home-section-right">
					<img src={landing_img} alt="landing img" />
				</div>
			</div>
		</div>
	);
};

export default HomeSection;
