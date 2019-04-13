import React from "react";
import "./WhatWeDoSection.css";
import Title from "../../components/Title/Title";
import WeDoCard from "../../components/WeDoCard";

// Import images
import WeDoImg01 from "../../main_assets/images/wedo_img_01.png";
import WeDoImg02 from "../../main_assets/images/wedo_img_02.png";
import WeDoImg03 from "../../main_assets/images/wedo_img_03.png";
import MoreServices from "../../main_assets/images/more_services.png";

const WhatWeDoSection = () => {
	const services = [
		{
			service: "Web and mobile development",
			title: "Get the most out of your website with google analytics",
			content:
				"We include data analytics (google analytics) as part of most of our projects for research and development.",
			image: WeDoImg01
		},
		{
			service: "Analytics and Data Science",
			title: "Get the most out of your website with google analytics",
			content:
				"We include data analytics (google analytics) as part of most of our projects for research and development.",
			image: WeDoImg02
		},
		{
			service: "Prototyping and design",
			title: "Get the most out of your website with google analytics",
			content:
				"We include data analytics (google analytics) as part of most of our projects for research and development.",
			image: WeDoImg03
		}
	];
	const servicesList = services.map((service, idx) => (
		<WeDoCard information={service} key={idx} />
	));

	return (
		<div id={"services"} className={"what-we-do-section"}>
			<Title title="What we do?" />
			{servicesList}
			<div className="what-we-do-section--more">
				<p>
					We also provide Resume Reviews and Mock interviews for internships and
					full-time positions, teach people how to code, build portfolio website
					for students and clubs/organizations
				</p>
				<img
					className="what-we-do-section--img"
					src={MoreServices}
					alt="More services icon"
				/>
			</div>
		</div>
	);
};

export default WhatWeDoSection;
