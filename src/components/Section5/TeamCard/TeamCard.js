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
          <a href={props.website}>
            <i className="fas fa-pen" />
          </a>
        </div>
        <div className="teamCardLinkedIn">
          <span className="linkedInCircle">
            <a href={props.linkedIn}>
              <i className="fab fa-linkedin-in" />
            </a>
          </span>
        </div>
        <div className="teamCardMessage">
          <span className="plusTeamCard">
            <a href="/">+ </a>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default teamCard;
