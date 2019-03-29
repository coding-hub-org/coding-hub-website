import React from "react";
import "./TeamCardList.css";
import MemberCard from "../MemberCard/MemberCard";

const TeamCardList = props => (
  <div className="teamCardList">
    {props.member.map(member => (
      <div className="card-project" id={member.name} key={member.name}>
        <MemberCard {...member} />
      </div>
    ))}
  </div>
);

export default TeamCardList;
