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
								<a href="#about">ABOUT</a>
							</div>
							<div className="footer-navigation-item">
								<a href="#team">TEAM</a>
							</div>
							<div className="footer-navigation-item">
								<a href="#services">SERVICES</a>
							</div>
							<div className="footer-navigation-item">
								<a href="#projects">PROJECTS</a>
							</div>
							<div className="footer-navigation-item">
								<a href="#contact">CONTACT US</a>
							</div>
						</div>
						<div className="footer-component--wrapper__top--social">
							<a href="mailto:psu-coders@gmail.com">
								<img src={Gmail} alt="" />
							</a>
							<a href="https://github.com/coding-hub-org">
								<img src={Github} alt="Github logo" />
							</a>
							<a href="https://www.linkedin.com/company/coding-hub-suny-plattsburgh/about/">
								<img src={LinkedIn} alt="Linkedin logo" />
							</a>
							<a href="https://www.instagram.com/codinghub_plattsburgh/">
								<img src={Instagram} alt="Instagram logo" />
							</a>
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
