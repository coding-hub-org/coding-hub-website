import React from 'react';

import './Navbar.css'
import coding_hub_img from "../../../main_assets/images/v2/coding_hub_img.png";

const Navbar = () => {
	return (
		<nav className="Nav-bar">
			<a href={"#/"}>
				<img src={coding_hub_img} alt="Logo"/>
			</a>
			
			<ul>
				<li><a href="/#about">About</a></li>
				<li><a href="/#team">Team</a></li>
				<li><a href="/#services">Services</a></li>
				<li><a href="/#works">works</a></li>
				<li><a href="/#contact">Contact Us</a></li>
			</ul>
			
			{/*<a href={"#/"}>*/}
				{/*<img src={coding_hub_img} alt="Logo"/>*/}
			{/*</a>*/}
			
			{/*<a href="/#about">About</a>*/}
			{/*<a href="/#team">Team</a>*/}
			{/*<a href="/#services">Services</a>*/}
			{/*<a href="/#works">works</a>*/}
			{/*<a href="/#contact">Contact Us</a>*/}
		</nav>
	)
}

export default Navbar