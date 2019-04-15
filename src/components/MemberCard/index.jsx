import React from "react";
import "./MemberCard.css";

// Import images
import githubMember from "../../main_assets/images/member_github_ic.svg";
import linkedinMember from "../../main_assets/images/member_linkedin_ic.svg";
import websiteMember from "../../main_assets/images/member_website_ic.svg";

const MemberCard = props => (
	<div className="member-card-component">
		<div className="member-card-component--image">
			<img src={props.imageUrl} width="250px" alt="" />
		</div>
		<div className="member-card-component--name">{props.name}</div>
		<p>Co-founder | {props.title}</p>
		<section className="member-card-component--information">
			<a href="/">
				<img src={websiteMember} alt="" />
			</a>
			<a href="/">
				<img src={githubMember} alt="" />
			</a>
			<a href="/">
				<img src={linkedinMember} alt="" />
			</a>
		</section>
	</div>
);

export default MemberCard;
