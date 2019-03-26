import React, { Component } from "react";
import "./Section6.css";
import Form from "../Form/Form";
import About from "../About/About";
import ScrollableAnchor from "react-scrollable-anchor";

class Section6 extends Component {
  contactUs =
    "Please feel free to drop a message if you want to talk about business opportunities or if you would like to use any of our services (portfolio websites, club websites, resumes, mock interviews, etc.). If you would like to become a member join our weekly meetings.";

  render() {
    return (
      <ScrollableAnchor id={"ContactUs"}>
        <div className="Section6">
          <div className="contactDiv">
            <About title="Let's get in touch" description={this.contactUs} />
          </div>
          <Form />
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Section6;
