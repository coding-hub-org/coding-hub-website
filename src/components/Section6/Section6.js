import React, { Component } from "react";
import "./Section6.css";
import Form from "../Form/Form";
import About from "../About/About";

class Section6 extends Component {
  render() {
    return (
      <div className="Section6">
        <div className="contactDiv">
          <About title="CONTACT US" description={this.props.description} />
        </div>
        <Form />
      </div>
    );
  }
}

export default Section6;
