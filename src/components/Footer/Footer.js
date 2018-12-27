import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-row-1">
          <div className="footer-logo">
            PSU Coders
            <span className="greenDot">.</span>
          </div>
          <div className="footer-navigation">
            <div className="footer-navigation-item">
              {" "}
              <a href="/">HOME</a>{" "}
            </div>
            <div className="footer-navigation-item">
              <a href="/">BLOG</a>
            </div>
            <div className="footer-navigation-item">
              <a href="/">CONTACT</a>
            </div>
            <div className="footer-navigation-item">
              <a href="/">ABOUT</a>
            </div>
          </div>
          <div className="footer-social">
            <div className="footer-social-item">
              <a href="/">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="footer-social-item">
              <a href="/">
                <i className="fab fa-twitter" />
              </a>
            </div>
            <div className="footer-social-item">
              <a href="/">
                <i className="fab fa-facebook" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-row-2">
          <hr id="footer-hr" />
        </div>
        <div className="footer-row-3">
          <div className="footer-rights">
            © 2018 Creation All Rights Reserved
          </div>
          <div className="terms-and-privacy">
            <div className="footer-privacy-policy">
              <a href="/">PRIVACY POLICY</a>
            </div>
            <div className="footer-terms-of-service">
              <a href="/">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
