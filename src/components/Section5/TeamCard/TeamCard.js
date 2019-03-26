import React from "react";
import "./TeamCard.css";

// Import images
import githubMember from '../../../main_assets/images/member_github_ic.svg';
import linkedinMember from '../../../main_assets/images/member_linkedin_ic.svg';
import websiteMember from '../../../main_assets/images/member_website_ic.svg';

const teamCard = props => (
  <div className="teamCard">
    <div className="teamCardImage">
      <img src={props.imageUrl} width="250px" alt="" />
    </div>
    <div className="teamCardName">{props.name}</div>
    <p>Co-founder | {props.title}</p>
    <section className="teamInformation">
      <a href="/"><img src={websiteMember} alt=""/></a>
      <a href="/"><img src={githubMember} alt=""/></a>
      <a href="/"><img src={linkedinMember} alt=""/></a>
    </section>
  </div>
);

export default teamCard;
