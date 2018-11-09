import React, { Component } from "react";
import "./ButtonGoto.css";

class ButtonGoto extends Component {
  handleClick = event => {
    event.preventDefault();
    console.log("clicked");
    this.props.onClicked("TEST");
  };

  render() {
    return (
      <a className="btn" href="#ContactUs">
        <span>{this.props.text}</span>
      </a>
    );
  }
}
export default ButtonGoto;
