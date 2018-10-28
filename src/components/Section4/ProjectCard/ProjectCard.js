import React from "react";
import "./Card.css";

const card = props => (
  <div className="card">
    <div className="cardImage">
      <img src={props.image} width="50px" alt="" />
    </div>
    <div className="cardTitle">{props.title}</div>
    <div className="cardDescription">{props.description}</div>
    <div className="plusButton">
      {/* <i>+</i> */}
      <span className="plus">
        <a href="">+ </a>
      </span>
    </div>
  </div>
);

export default card;
