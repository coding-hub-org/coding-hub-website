import React from "react";
import "./ImageView.css";

const imageView = props => (
  <div className="imageView">
    <img
      src={props.img}
      style={{
        minWidth: props.sizeInPercentage + "px",
        maxWidth: props.sizeInPercentage + "px"
      }}
      alt=""
    />
  </div>
);

export default imageView;
