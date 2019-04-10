import React from 'react';
import "./Section3.css";
import Collage_45 from "../../main_assets/images/collage_45.svg";

const Section3End = () => (
  <div className = "Section3End">
    <div className="Sec-3-end-text">
      <h2 className = "service-title-2">And much more</h2>
      <div className = "service-desc">
        We also provide Resume Reviews and Mock interviews for internships and full-time positions, teach people how to code, build portfolio website for students and clubs/organizations
      </div>
    </div>
    <img src={Collage_45} alt="" className = "end-pic"/>
  </div>
)

export default Section3End;