import React from "react";
import "./Section2.css";
import About from "../About/About";
import ScrollableAnchor from "react-scrollable-anchor";

let aboutUs =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, asperiores cumque quam debitis quaerat optio molestias ab consectetur aliquam incidunt! Dolor quaerat doloribus accusamus repellat hic, impedit voluptas officia debitis!";

const section2 = props => (
  <ScrollableAnchor id={"About"}>
    <div className="Section2">
      <About title="ABOUT" description={aboutUs} />
    </div>
  </ScrollableAnchor>
);

export default section2;
