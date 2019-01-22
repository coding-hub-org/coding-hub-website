import React, { Component } from "react";
import "./Section3.css";
import Title from "../Title/Title";
import DeviceImageMain from "../../main_assets/images/Devices.svg";
import CardListWithBorders from "../CardListWithBorders/CardListWithBorders";
import ScrollableAnchor from "react-scrollable-anchor";

class Section3 extends Component {
  render() {
    return (
      <ScrollableAnchor id={"WhatWeDo"}>
        <div className="Section3">
          <div className="Section3-Part1">
            <Title title="WHAT WE DO?" />
            <div className="image-dv">
              <img src={DeviceImageMain} width="1000px" alt="" />
            </div>
          </div>
          <div className="Section3-Part2">
            <CardListWithBorders />
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}
export default Section3;