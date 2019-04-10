import React from 'react'
import Navbar from "../Navbar/Navbar";
import HomeContent from "../HomeContent/HomeContent"

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