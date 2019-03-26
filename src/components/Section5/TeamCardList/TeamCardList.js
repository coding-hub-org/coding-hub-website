import React from "react";
import "./TeamCardList.css";
import TeamCard from "../TeamCard/TeamCard";

const TeamCardList = props => (
  <div className="teamCardList">
    {props.member.map(member => (
      <div className="card-project" id={member.name} key={member.name}>
        <TeamCard {...member} />
      </div>
    ))}
  </div>
);

export default TeamCardList;
