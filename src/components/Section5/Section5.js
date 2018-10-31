import React, { Component } from "react";
import "./Section5.css";
import Title from "../Title/Title";
import TeamCardList from "./TeamCardList/TeamCardList";

class Section5 extends Component {
  team = [
    {
      imageUrl: "https://avatars2.githubusercontent.com/u/26859409?v=4",
      name: "Gonzalo Reyes",
      title: "PRESIDENT",
      linkedIn: "li",
      website: "web",
      details: "Coding and Design Lord of Plattsburgh"
    },
    {
      imageUrl: "https://avatars2.githubusercontent.com/u/25006527?v=4",
      name: "Gaurav Jayasawal",
      title: "VICE PRESIDENT",
      linkedIn: "li",
      website: "web",
      details: "Coding and Design Lord of Plattsburgh"
    },
    {
      imageUrl: "https://avatars2.githubusercontent.com/u/17516041?v=4",
      name: "Keenan Kunzelman",
      title: "PR CHAIR",
      linkedIn: "li",
      website: "web",
      details: "Coding and Design Lord of Plattsburgh"
    },
    {
      imageUrl: "https://avatars2.githubusercontent.com/u/31390562?v=4",
      name: "Hung Nguyen",
      title: "TREASURER",
      linkedIn: "li",
      website: "web",
      details: "Coding and Design Lord of Plattsburgh"
    },
    {
      imageUrl:
        "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/39119382_2428377430522427_2570412788488863744_n.jpg?_nc_cat=110&_nc_ht=scontent-lga3-1.xx&oh=a6b2b89b4a49acae343bebe6f2d9cc38&oe=5C7E3BC0",
      name: "Keith Prevost",
      title: "PR CHAIR",
      linkedIn: "li",
      website: "web",
      details: "Coding and Design Lord of Plattsburgh"
    },
    {
      imageUrl:
        "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/28468608_1514372138679185_8429054350566895709_n.jpg?_nc_cat=111&_nc_ht=scontent-lga3-1.xx&oh=9d4ea9a472d96f5bee245da18e246678&oe=5C86BC73",
      name: "Neel Adalja",
      title: "Secretary",
      linkedIn: "li",
      website: "web",
      details: "Coding and Design Lord of Plattsburgh"
    }
  ];
  render() {
    return (
      <div className="Section5">
        <Title title="OUR TEAM" />
        <div className="team-cardlist">
          <TeamCardList member={this.team} />
        </div>
      </div>
    );
  }
}

export default Section5;
