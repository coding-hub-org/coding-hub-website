import React, { Component } from "react";
import "./Button2.css";

class Button2 extends Component {
  handleClick = event => {
    event.preventDefault();
    console.log("clicked");
    this.props.onClicked("TEST");
  };

  render() {
    return (
      <a className="btn" href="#ContactUs" onClick={this.handleClick}>
        <span>{this.props.text}</span>
      </a>
    );
  }
}
export default Button2;
