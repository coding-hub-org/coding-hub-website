import React from "react";
import "./Button.css";

const button = props => (
  <a href="#ContactUs" className="btn_1">
    <span>{props.text}</span>
  </a>
);


export default button;
