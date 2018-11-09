import React, { Component } from "react";
import "./Section6.css";
import Form from "../Form/Form";
import About from "../About/About";
import ScrollableAnchor from "react-scrollable-anchor";

class Section6 extends Component {
  contactUs =
    "Please feel free to drop a message if you want to talk about business opportunities. Coding hub is a non-profit club on campus aimed to help students by providing various software solutions including personal portfolio websites, club websites, mobile applicaitons etc.";

  render() {
    return (
      <ScrollableAnchor id={"ContactUs"}>
        <div className="Section6">
          <div className="contactDiv">
            <About title="CONTACT US" description={this.contactUs} />
          </div>
          <Form />
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Section6;
