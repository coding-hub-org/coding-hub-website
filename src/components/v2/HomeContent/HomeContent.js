import React from 'react'

import landing_img from "../../../main_assets/images/v2/landing_img.png"

import "./HomeContent.css"

const HomeContent = () => {
	return (
		<div className="home-content">
			<div>
				<h1 className="text1">Coding Hub</h1>
				<h2 className="text2">Software solutions for students by students</h2>
				{/*<button className="contact-button">contact us</button>*/}
				<a type="button" href="/#contact" className="contact-button">Contact us</a>
			</div>
			<img src={landing_img} alt="landing img"/>
		</div>
	)
}

export default HomeContent