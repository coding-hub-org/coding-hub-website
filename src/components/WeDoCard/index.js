import React from "react";
import "./WeDoCard.css";
import bulletImg from "../../main_assets/images/bullet_img.svg";

const WeDoCard = ({ information }) => {
	return (
		<div className="we-do-card-component">
			<div className="we-do-card-component--left">
				<img src={information.image} alt="web dev icon" />
			</div>
			<div className="we-do-card-component--right">
				<h2 className="we-do-card-component--right__service">
					Web and mobile development
				</h2>
				<h2>Get the most out of your website with google analytics</h2>
				<div className="we-do-card-component--right__description">
					<img src={bulletImg} alt="bullet icon" />
					<p>
						We include data analytics (google analytics) as part of most of our
						projects for research and development.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WeDoCard;
