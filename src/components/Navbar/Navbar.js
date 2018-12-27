import React, { Component } from "react";

import SideDrawer from "./SideDrawer/SideDrawer";
import Toolbar from "./Toolbar/Toolbar";
import "./Navbar.css";
import Backdrop from "../Backdrop/Backdrop";

// import Button from "./components/Button/Button";

class Navbar extends Component {
  state = {
    SideDrawerOpen: false
  };

  navItems = [
    { id: "item1", value: "HOME", link: "#Home" },
    { id: "item2", value: "ABOUT", link: "#About" },
    { id: "item3", value: "WHAT WE DO", link: "#WhatWeDo" },
    { id: "item4", value: "PROJECTS", link: "#Projects" },
    { id: "item5", value: "OUR TEAM", link: "#OurTeam" }
  ];

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        SideDrawerOpen: !prevState.SideDrawerOpen
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="Navbar">
        <Toolbar
          drawerClickHandle={this.drawerToggleClickHandler}
          navItems={this.navItems}
          buttonText="CONTACT US"
        />
        {/* <div className="hireMeButton">
            <Button text="HIRE ME" />
          </div> */}
        <SideDrawer
          show={this.state.SideDrawerOpen}
          navItems={this.navItems}
          buttonText="CONTACT US"
        />
        {backdrop}
      </div>
    );
  }
}

export default Navbar;
