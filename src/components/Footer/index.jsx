import React, { Component } from "react";
import "./Footer.css";

import LogoImage from "../../main_assets/images/coding_hub_ic.svg";

import Github from "../../main_assets/images/github.svg";
import Gmail from "../../main_assets/images/gmail_color_ic.svg";
import Instagram from "../../main_assets/images/instagram.svg";
import LinkedIn from "../../main_assets/images/linkedin.svg";

class Footer extends Component {
	render() {
		return (
			<div className="footer-component">
				<div className="footer-component--wrapper">
					<div className="footer-component--wrapper__top">
						<div className="footer-component--wrapper__top--logo">
							<img src={LogoImage} alt="Coding hub logo" />
							<p>Coding Hub</p>
						</div>
						<div className="footer-component--wrapper__top--navigation">
							<div className="footer-navigation-item">
								<a href="/#About">ABOUT</a>
							</div>
							<div className="footer-navigation-item">
								<a href="/#OurTeam">TEAM</a>
							</div>
							<div className="footer-navigation-item">
								<a href="/#WhatWeDo">SERVICES</a>
							</div>
							<div className="footer-navigation-item">
								<a href="/#Projects">PROJECTS</a>
							</div>
							<div className="footer-navigation-item">
								<a href="/#ContactUs">CONTACT US</a>
							</div>
						</div>
						<div className="footer-component--wrapper__top--social">
							<img src={Gmail} alt="" />
							<img src={LinkedIn} alt="" />
							<img src={Github} alt="" />
							<img src={Instagram} alt="" />
						</div>
					</div>
					<div className="footer-component--wrapper__bottom">
						<span className="copyright">
							&copy; 2019 Coding Hub All Rights Reserved
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
