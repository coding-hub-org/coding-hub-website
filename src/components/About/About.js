import React from "react";
import "./About.css";
import Title from "../Title/Title";
import Description from "./Description/Description";

const about = props => (
  <div className="about">
    <Title title={props.title} />
    <Description desc={props.description} />
  </div>
);

export default about;
