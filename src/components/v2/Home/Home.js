import React from 'react'
import Navbar from "../../v2/Navbar/Navbar";
import HomeContent from "../../v2/HomeContent/HomeContent"

import './Home.css'


const Home = () => {
	return (
		<div className="Home">
			<Navbar className="Nav-bar"/>
			<HomeContent className="Home-content"/>
		</div>
	)
}

export default Home