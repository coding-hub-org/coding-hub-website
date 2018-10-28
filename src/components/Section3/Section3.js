import React, { Component } from "react";
import "./Section3.css";
import Title from "../Title/Title";
import DeviceImage from "../../main_assets/images/Devices.svg";
import CardListWithBorders from "../CardListWithBorders/CardListWithBorders";

class Section3 extends Component {
  render() {
    return (
      <div className="Section3">
        <div className="Section3-Part1">
          <div className="title-div">
            <Title title="WHAT WE DO?" />
          </div>
          <div className="image-dv">
            <img src={DeviceImage} width="1000px" alt="" />
          </div>
        </div>
        <div className="Section3-Part2">
          <CardListWithBorders />
        </div>
      </div>
    );
  }
}
export default Section3;
