import React, { Component } from "react";
import "./Section6.css";
import Form from "../Form/Form";
import About from "../About/About";

class Section6 extends Component {
  render() {
    return (
      <div className="Section6">
        <div className="contactDiv">
          <div className="keith-div">
            <About title="CONTACT US" description={this.props.description} />
          </div>
        </div>
        <Form />
      </div>
    );
  }
}

export default Section6;
