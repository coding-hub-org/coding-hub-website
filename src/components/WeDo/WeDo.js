import React from "react";
import "./WeDo.css";

const WeDo = props => {
  if (props.info[0] === "right") {
    return (
      <div className = "WeDo-container">
        <div className="WeDo-Col">
          <h2 className = "service-title-1">{ props.info[2] }</h2>
          <h2 className = "service-title-2">{ props.info[3] }</h2>
          <p className = "service-desc">{ props.info[4] }</p>
        </div>
        <div className="WeDo-Col">
          <img src={ props.info[1] } alt="" className = "pic"/>
        </div>
      </div>
    );
  }
  else {
    return(
      <div className = "WeDo-container">
        <div className="WeDo-Col">
          <img src={ props.info[1] } alt="" className = "pic"/>
        </div>
        <div className="WeDo-Col">
          <h2 className = "service-title-1">{ props.info[2] }</h2>
          <h2 className = "service-title-2">{ props.info[3] }</h2>
          <p>{ props.info[4] }</p>
        </div>
      </div>
    )
  }
}

export default WeDo;