import React from "react";
import "./Toolbar.css";
import Button from "../../Button/Button";
import logo from "../../../main_assets/images/coding_hub_nav.svg";
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
              <a href={item.link} id={item.id}>
                {item.value}
              </a>
            </li>
          ))}
          {props.buttonText !== "" && (
            <div className="hireMeButton">
              <Button text={props.buttonText} link="#Section6" />
            </div>
          )}
        </ul>
      </div>
    </nav>

    {/* <FancyButton /> */}
  </header>
);

export default toolbar;
