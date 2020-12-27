import React, { Component } from "react";
import "./TeamSection.css";
import {Link} from "react-router-dom";
// Import components
import Title from "../../components/Title";
import TeamCardList from "../../components/TeamCardList";

class TeamSection extends Component {
	team = [
		{
			imageUrl: "https://avatars1.githubusercontent.com/u/32785143?s=400&v=4",
			name: "Quan Vo",
			title: "Full Stack Developer",
			email: 'mailto:qvo001@plattsburgh.edu',
			linkedIn: "quanvotr",
			website: "https://quan-vo-portfolio.netlify.com/",
			github: "votrungquan1999"
		},
		{
			imageUrl: "https://avatars1.githubusercontent.com/u/19680448?s=400&v=4",
			name: "Khanh Le",
			title: "Co-founder | Full Stack Developer",
			email: "mailto:kle003@plattsburgh.edu",
			linkedIn: "wkhanh-le",
			website: "https://winkhanh.github.io/#/",
			github: "winkhanh",
    	},
		{
			imageUrl: "https://avatars1.githubusercontent.com/u/1631257?s=400&v=4",
			name: "Michael Barbas",
			title: "Full Stack Developer",
			email: 'mailto:michaelbarbas@gmail.com',
			linkedIn: "michael-barbas-30a147150",
			website: "https://barbas.me",
			github: "mbarbas11"

		}
	];
	render() {
		return (
			<div id={"team"} className="team-section">
				<Title title="Our Current Core Team" />
				<TeamCardList member={this.team} />
				<Link className="button" to="/members/"> See all members </Link>
			</div>
		);
	}
}

export default TeamSection;
