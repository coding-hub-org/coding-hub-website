import React, { Component } from "react";

import "./Navbar.css";
import coding_hub_img from "../../main_assets/images/coding_hub_img.png";
import burger_nav from "../../main_assets/images/burger_nav.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { menu_visible: true };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.onclick_handler = this.onclick_handler.bind(this);
    this.resize();
  }

  resize() {
    this.setState({ menu_visible: window.innerWidth > 425 });
  }

  onclick_handler(e) {
    e.preventDefault();
    // console.log(this.state);
    if (this.state.menu_visible) {
      this.setState(state => ({ menu_visible: false }));
    } else {
      this.setState(state => ({ menu_visible: true }));
    }
  }

  render() {
    const navigation_items = visible => {
      if (visible)
        return (
          <ul>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#team">Team</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#works">works</a>
            </li>
            <li>
              <a href="/#contact">Contact Us</a>
            </li>
          </ul>
        );
      else {
        return null;
      }
    };

    return (
      <nav className="Nav-bar">
        <img
          className="burger-nav"
          src={burger_nav}
          alt="burger-nav"
          onClick={this.onclick_handler}
        />
        <a href={"/"}>
          <img src={coding_hub_img} alt="Logo" />
        </a>
        {navigation_items(this.state.menu_visible)}
        {/*<a href={"#/"}>*/}
        {/*<img src={coding_hub_img} alt="Logo"/>*/}
        {/*</a>*/}

        {/*<a href="/#about">About</a>*/}
        {/*<a href="/#team">Team</a>*/}
        {/*<a href="/#services">Services</a>*/}
        {/*<a href="/#works">works</a>*/}
        {/*<a href="/#contact">Contact Us</a>*/}
      </nav>
    );
  }
}

export default Navbar;
