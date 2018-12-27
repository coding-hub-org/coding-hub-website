import React from "react";
import ImageView from "../ImageView/ImageView";
import Navbar from "../Navbar/Navbar";

import LogoImage from "../../main_assets/images/coding_hub_ic.svg";
import "./Section1.css";

const section1 = props => (
  <div className="section-1" id="Home">
    <Navbar />

    <div className="firstPageImage">
      <img src={LogoImage} width="500px" alt="" />
    </div>

    {/* <div className="landing-page-logo"> */}
    {/* <ImageView img={LogoImage} sizeInPixels="600" /> */}
    {/* </div> */}
  </div>
);

export default section1;
