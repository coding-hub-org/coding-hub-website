import React, { Component } from "react";
import "./Footer.css";

import LogoImage from '../../main_assets/images/coding_hub_ic.svg';

import Github from '../../main_assets/images/github.svg';
import Gmail from '../../main_assets/images/gmail_color_ic.svg';
import Instagram from '../../main_assets/images/instagram.svg';
import LinkedIn from '../../main_assets/images/linkedin.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-row-1">
          <div className="footer-logo-container">
            <img src={ LogoImage } alt="" className="footer-logo"/>
            <span>Coding Hub</span>
          </div>
          <div className="footer-navigation">
            <div className="footer-navigation-item">
              <a href="/">ABOUT</a>
            </div>
            <div className="footer-navigation-item">
              <a href="/">TEAM</a>
            </div>
            <div className="footer-navigation-item">
              <a href="/">SERVICES</a>
            </div>
            <div className="footer-navigation-item">
              <a href="/">PROJECTS</a>
            </div>
            <div className="footer-navigation-item">
              <a href="/">CONTACT US</a>
            </div>
          </div>
          <div className="social-icons">
            <img src={ Gmail } alt=""/>
            <img src={ LinkedIn } alt=""/>
            <img src={ Github } alt=""/>
            <img src={ Instagram } alt=""/>
          </div>
        </div>
        <div className="footer-row-2">
          <span className="copyright">&copy; 2018 Coding Hub All Rights Reserved</span>
        </div>
      </div>
    );
  }
}

export default Footer;
