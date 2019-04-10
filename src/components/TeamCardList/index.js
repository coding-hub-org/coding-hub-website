import React from "react";
import "./TeamCardList.css";
import MemberCard from "../MemberCard";

const TeamCardList = props => (
	<div className="team-list-component">
		{props.member.map(member => (
			<div className="card-project" id={member.name} key={member.name}>
				<MemberCard {...member} />
			</div>
		))}
	</div>
);

export default TeamCardList;
