import React from "react";
import "./HomeSection.css";

import Navbar from "../../components/Navbar";
import landing_img from "../../main_assets/images/landing_img.svg";

const HomeSection = () => {
	return (
		<div className={"home-section"}>
			<Navbar />
			<div className="home-section--wrapper">
				<h1>Software Solutions for Students by Students</h1>
				<a href="#contact">CONTACT US</a>
				<img src={landing_img} alt="landing img" />
			</div>
		</div>
	);
};

export default HomeSection;
