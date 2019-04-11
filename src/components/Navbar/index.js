import React from "react";
import "./Navbar.css";
import logo from "../../main_assets/images/coding-hub-logo.svg";
import burger from "../../main_assets/images/burger_ic.svg";

const Navbar = () => {
	return (
		<nav className="navbar-component">
			<div className="navbar-component--logo">
				<img src={logo} alt="Coding Hub logo" />
			</div>
			<img id={"burger"} src={burger} alt="Burger icon" />
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
			</div>
		</nav>
	);
};

export default Navbar;
