import React from "react";
import "./Toolbar.css";
import Button from "../../Button/Button";
import logo from "./Assets/psuc_ic@2x.png";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <header className="toolbar">
    <div className="toolbar_logo">
      <a href="/">
        <img src={logo} alt="" />
      </a>
    </div>
    <div className="spacer" />
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandle} />
      </div>
      <div className="toolbar_navigation-items">
        <ul>
          {props.navItems.map(item => (
            <li key={item.id}>
              {" "}
              <a href="/" id={item.id}>
                {item.value}
              </a>
            </li>
          ))}
          {props.buttonText !== "" && (
            <div className="hireMeButton">
              <Button text={props.buttonText} />
            </div>
          )}
        </ul>
      </div>
    </nav>

    {/* <FancyButton /> */}
  </header>
);

export default toolbar;
