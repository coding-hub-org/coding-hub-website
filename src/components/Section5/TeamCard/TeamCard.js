import React from "react";
import "./TeamCard.css";

const teamCard = props => (
  <div className="teamCard">
    <div className="teamCardImage">
      <img src={props.imageUrl} width="250px" alt="" />
    </div>
    <div className="teamCardSymbol">&lt;/&gt;</div>

    <div className="teamCardName">{props.name}</div>
    <div className="bottomLine">
      <div className="teamCardTitle">{props.title}</div>
      <div className="links">
        <div className="teamCardWebsite">
          <a href={props.email} target="_blank">
            <i className="fas fa-pen" />
          </a>
        </div>
        <div className="teamCardLinkedIn">
          <a className="linkedInCircle" href={props.linkedIn} target="_blank">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <div className="teamCardMessage">
          <a className="plusTeamCard" href={props.website} target="_blank">
            +
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default teamCard;
