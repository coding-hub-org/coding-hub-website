import React from "react";
import "./CardDuties.css";
import ImageView from "../ImageView/ImageView";
// import testImage from "../../main_assets/images/development.svg";

const CardDuties = props => (
  <div className="cardDuties">
    <div className="cardDutiesInnerDiv">
      <div className="card-duties-image">
        {/* {props.image} */}
        <ImageView img={props.image} sizeInPixels="60" />
      </div>
      <div className="card-duties-title">{props.title}</div>
      <div className="card-duties-description">{props.description}</div>
    </div>
  </div>
);

export default CardDuties;
