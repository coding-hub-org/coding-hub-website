import React, { Component } from "react";
import "./Section6.css";
import Form from "../Form/Form";
import About from "../About/About";
import ScrollableAnchor from "react-scrollable-anchor";

class Section6 extends Component {
  contactUs =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quasi porro vero fugit dolore, error praesentium dolores quis ex nostrum quae totam sint, maiores qui perferendis corporis consequuntur rerum. Nam?";

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
