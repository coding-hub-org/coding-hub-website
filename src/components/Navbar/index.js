import React from "react";
import "./Navbar.css";
import logo from "../../main_assets/images/coding_hub_ic.svg";

const Navbar = () => {
	return (
		<nav className="navbar-component">
			<img src={logo} alt="" />
			<div className="navbar-component--links">
				<a href="/" className="navbar-component--navigate">
					<span>
						<span>
							<span>ABOUT</span>
						</span>
					</span>
				</a>
				<a href="/" className="navbar-component--navigate">
					<span>
						<span>
							<span>TEAM</span>
						</span>
					</span>
				</a>
				<a href="/" className="navbar-component--navigate">
					<span>
						<span>
							<span>SERVICES</span>
						</span>
					</span>
				</a>
				<a href="/" className="navbar-component--navigate">
					<span>
						<span>
							<span>WORKS</span>
						</span>
					</span>
				</a>
				<a href="/" className="navbar-component--navigate">
					<span>
						<span>
							<span>CONTACT US</span>
						</span>
					</span>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
