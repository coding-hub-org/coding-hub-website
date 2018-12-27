import React from "react";
import "./Button.css";

const button = props => (
  <a href="#ContactUs" className="btn_1">
    <span>{props.text}</span>
  </a>
);

{
  /* <a className="btn" href="/" onClick={this.handleClick}>
        
      </a> */
}

export default button;
