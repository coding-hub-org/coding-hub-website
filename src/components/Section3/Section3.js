import React, { Component } from "react";
import "./Section3.css";
import Title from "../Title/Title";
import WeDo from "../WeDo/WeDo";
import WeDo_1 from "../../main_assets/images/wedo_img_01.png";
import WeDo_2 from "../../main_assets/images/wedo_img_02.png";
import WeDo_3 from "../../main_assets/images/wedo_img_03.png";
import ScrollableAnchor from "react-scrollable-anchor";

class Section3 extends Component {
  services = {
    service_1 : ["left", WeDo_1 , "Web and mobile development", "Get the most out of your website with google analytics" , "We include data analytics (google analytics) as part of most of our projects for research and development." ],
    service_2 : ["right", WeDo_2, "Analytics", "Get the most out of your website with google analytics" , "We include data analytics (google analytics) as part of most of our projects for research and development." ],
    service_3 : ["left", WeDo_3, "Prototyping and design", "Get the most out of your website with google analytics" , "We include data analytics (google analytics) as part of most of our projects for research and development."]
  }
  render() {
    return (
      <ScrollableAnchor id={"WhatWeDo"}>
        <div className="Section3">
        <Title title="What we do?" />
          <div className="Section3-Grid">
            <WeDo info = { this.services.service_1 } />
            <WeDo info = { this.services.service_2 } />
            <WeDo info = { this.services.service_3 } />
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}
export default Section3;
