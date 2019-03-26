import React from "react";
import "./Button3.css";

const button3 = props => (
  <a href="/">
    <div className="Button3">
      <div className="icon">
        <i className={props.fontAwesomeIcon} />
      </div>
      <div className="button-text">{props.text}</div>
    </div>
  </a>
);

export default button3;
