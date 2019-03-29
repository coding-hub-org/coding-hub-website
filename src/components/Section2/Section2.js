import React from "react";
import "./Section2.css";
import About from "../About/About";
import ScrollableAnchor from "react-scrollable-anchor";

let aboutUs =
  "      Coding Hub was co-founded in 2018 to develop mobile and web applications to provide services to students on the SUNY Plattsburgh campus. The main mission of the club is to make the lives of students easier with the use of software products.";

const section2 = props => (
  <ScrollableAnchor id={"About"}>
    <div className="Section2">
      <About title="About Coding Hub" description={aboutUs} />
    </div>
  </ScrollableAnchor>
);

export default section2;
