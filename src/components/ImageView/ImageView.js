import React from "react";
import "./ImageView.css";

const imageView = props => (
  <div>
    <img src={props.img} alt="" />
  </div>
);

export default imageView;
