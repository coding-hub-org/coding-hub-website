import React from "react";
import DataIco from "../../main_assets/images/data_icon.svg";
import "./WeDo.css";

const WeDo = props => {
  if (props.info[0] === "right") {
    return (
      <div className = "WeDo-container">
        <div className="WeDo-Col">
          <h2 className = "service-title-1">{ props.info[2] }</h2>
          <h2 className = "service-title-2">{ props.info[3] }</h2>
          <div className = "service-row-3">
            <img src={ DataIco } alt="" className = "data-icon"/>
            <div className = "service-desc">
              { props.info[4] }
            </div>
          </div>
        </div>
        <div className="WeDo-Col">
          <img src={ props.info[1] } alt="" className = "WeDo-pic"/>
        </div>
      </div>
    );
  }
  else {
    return(
      <div className = "WeDo-container">
        <div className="WeDo-Col">
          <img src={ props.info[1] } alt="" className = "WeDo-pic"/>
        </div>
        <div className="WeDo-Col">
          <h2 className = "service-title-1">{ props.info[2] }</h2>
          <h2 className = "service-title-2">{ props.info[3] }</h2>
          <div className = "service-row-3">
            <img src={ DataIco } alt="" className = "data-icon"/>
            <div className = "service-desc">
              { props.info[4] }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WeDo;