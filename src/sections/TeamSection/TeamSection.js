import React, { Component } from "react";
import "./TeamSection.css";

// Import components
import Title from "../../components/Title";
import TeamCardList from "../../components/TeamCardList";

class TeamSection extends Component {
	team = [
		{
			imageUrl: "https://avatars2.githubusercontent.com/u/26859409?v=4",
			name: "Gonzalo Reyes",
			title: "Co-founder | President",
			email: "mailto:greye003@plattsburgh.edu",
			linkedIn: "gonzalo-reyes",
			website: "https://www.iamgonchi.com/",
			github: "gonzen2310",
			details: "Coding and Design Lord of Plattsburgh"
		},
		{
			imageUrl: "https://avatars2.githubusercontent.com/u/25006527?v=4",
			name: "Gaurav Jayasawal",
			title: "Co-founder | Vice President",
			email: "mailto:jgaurav6@gmail.com",
			linkedIn: "gauravjj",
			website: "http://www.gauravjj.com",
			github: "jgaurav6",
			details: "Coding and Design Lord of Plattsburgh"
		},
		{
			imageUrl: "https://avatars2.githubusercontent.com/u/17516041?v=4",
			name: "Keenan Kunzelman",
			title: "Co-founder | CSO",
			email: "mailto:kkunz001@plattsburgh.edu",
			linkedIn: "keenankunzelman",
			website: "http://keenan-kunzelman.surge.sh/",
			github: "KeenanKunzelman",
			details: "Coding and Design Lord of Plattsburgh"
		},
		{
			imageUrl: "https://avatars2.githubusercontent.com/u/31390562?v=4",
			name: "Hung Nguyen",
			title: "Co-founder | Lead Mobile Developer",
			email: "mailto:hnguy011@plattsburgh.edu",
			linkedIn: "nthungdev",
			website: "web",
			github: "nthungdev",
			details: "Coding and Design Lord of Plattsburgh"
		},
		{
			imageUrl: "https://avatars2.githubusercontent.com/u/27921089?v=4",
			name: "Keith Prevost",
			title: "Co-founder | Back-end Developer",
			email: "mailto:kprev003@plattsburgh.edu",
			linkedIn: "keith-prevost-776125161",
			website: "web",
			github: "rickyprev",
			details: "Coding and Design Lord of Plattsburgh"
		},
		{
			imageUrl: "https://avatars1.githubusercontent.com/u/19680448?s=400&v=4",
			name: "Khanh Le",
			title: "Co-founder | Secretary",
			email: "mailto:kle003@plattsburgh.edu",
			linkedIn: "wkhanh-le",
			website: "web",
			github: "winkhanh",
			details: "Coding and Design Lord of Plattsburgh"
    },
		{
			imageUrl: "https://avatars2.githubusercontent.com/u/39847629?s=400&v=4",
			name: "Swornim Barahi",
			title: "Full Stack Developer",
			email: "mailto:swornimbarahi@gmail.com",
			linkedIn: "swornimbarahi",
			website: "https://www.swornimbarahi.com",
			github: "swornimbarahi",
			details: "Coding and Design Lord of Plattsburgh"
		},
		{
			imageUrl: "https://avatars1.githubusercontent.com/u/10709067?s=400&v=4",
			name: "Michael Gates",
			title: "Full Stack Developer",
			email: "mailto:kprev003@plattsburgh.edu",
			linkedIn: "michaelgatesdev",
			website: "web",
			github: "MichaelGatesDev",
			details: "Coding and Design Lord of Plattsburgh"
		}
	];
	render() {
		return (
			<div id={"team"} className="team-section">
				<Title title="Our Team" />
				<TeamCardList member={this.team} />
			</div>
		);
	}
}

export default TeamSection;
