import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-row-1">
          <div className="footer-logo">PSU Corders.</div>
          <div className="footer-navigation">
            <div className="footer-navigation-item">HOME</div>
            <div className="footer-navigation-item">BLOG</div>
            <div className="footer-navigation-item">CONTACT</div>
            <div className="footer-navigation-item">ABOUT</div>
          </div>
          <div className="footer-social">
            <div className="footer-social-item">Be</div>
            <div className="footer-social-item">M</div>
            <div className="footer-social-item">Ba</div>
          </div>
        </div>
        <div className="footer-row-2">
          <hr />
        </div>
        <div className="footer-row-3">
          <div className="footer-rights">
            © 2018 Creation All Rights Reserved
          </div>
          <div className="footer-privacy-policy">PRIVACY POLICY</div>
          <div className="footer-terms-of-service">TERMS OF SERVICE</div>
        </div>
      </div>
    );
  }
}

export default Footer;
