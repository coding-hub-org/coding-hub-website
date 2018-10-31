import React from "react";
import "./Section2.css";
import About from "../About/About";

let aboutUs =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, asperiores cumque quam debitis quaerat optio molestias ab consectetur aliquam incidunt! Dolor quaerat doloribus accusamus repellat hic, impedit voluptas officia debitis!";

const section2 = props => (
  <div className="Section2">
    <About title="ABOUT" description={aboutUs} />
  </div>
);

export default section2;
