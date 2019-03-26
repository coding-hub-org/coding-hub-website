import React from "react";
import "./DrawerToggleButton.css";

const drawerToggleButton = props => (
  <div className="toggle-button">
    {/* <FontAwesomeIcon icon="bars" onClick={props.click} /> */}
    <i className="fas fa-bars" onClick={props.click} />
    {/* <button>
      <div className="toggle-button_line" />
    </button> */}
  </div>
);

export default drawerToggleButton;
