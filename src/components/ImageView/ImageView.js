import React from "react";
import "./ImageView.css";

const imageView = props => (
  <div className="imageView">
    <img
      src={props.img}
      style={{
        minWidth: props.sizeInPixels + "px",
        maxWidth: props.sizeInPixels + "px"
      }}
      alt=""
    />
  </div>
);

export default imageView;
