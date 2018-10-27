import React from "react";
import "./Button.css";

const button = props => (
  <a href="/" className="btn_1">
    {props.text}
  </a>
);

export default button;
