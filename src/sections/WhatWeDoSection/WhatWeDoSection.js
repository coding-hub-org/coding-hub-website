import React from "react";
import "./WhatWeDoSection.css";
import Title from "../../components/Title/Title";
import WeDoCard from "../../components/WeDoCard";

// Import images
import WeDoImg01 from "../../main_assets/images/wedo_img_01.png";

const WhatWeDoSection = () => {
	const services = [
		{
			service: "Web and mobile development",
			title: "Get the most out of your website with google analytics",
			content:
				"We include data analytics (google analytics) as part of most of our projects for research and development.",
			image: WeDoImg01
		}
	];
	const servicesList = services.map((service, idx) => (
		<WeDoCard information={service} key={idx} />
	));

	return (
		<div className={"what-we-do-section"}>
			<Title title="What we do?" />
			{/* <WeDoCard />
			<WeDoCard />
			<WeDoCard /> */}
			{servicesList}
		</div>
	);
};

export default WhatWeDoSection;
