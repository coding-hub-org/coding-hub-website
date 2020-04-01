import React, { Component, useEffect } from "react";
import "./App.css";
import {Switch, BrowserRouter, Route, useLocation} from 'react-router-dom';
import ProjectSection from "./sections/ProjectsSection/ProjectsSection";

import HomeSection from "./sections/HomeSection/HomeSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import TeamSection from "./sections/TeamSection/TeamSection";
import Footer from "./components/Footer";
import ContactSection from "./sections/ContactSection/ContactSection";
import WhatWeDoSection from "./sections/WhatWeDoSection/WhatWeDoSection";
import MembersSection from "./sections/MembersSection/MembersSection";

class BaseApp extends Component {
	render() {
		console.log("FINISHED SET UP");
		return (
			<React.Fragment>
				<HomeSection />
				<AboutSection />
				<WhatWeDoSection />
				<TeamSection />
				<ProjectSection />
				<ContactSection />
				<Footer />
			</React.Fragment>
		);
	}
}
const ScrollToTop=()=>{
	const {pathname}=useLocation();
	useEffect(()=>{
		window.scrollTo(0,0);
	},[pathname]);
	return null;
}
const App=()=>{
	return(
		<BrowserRouter>
			<ScrollToTop/>
			<div className="App">
			<Switch>
				<Route exact path='/' component={BaseApp}/>
				<Route path='/members' component={MembersSection}/>
			</Switch>
			</div>
		</BrowserRouter>
	)
}
export default App;
