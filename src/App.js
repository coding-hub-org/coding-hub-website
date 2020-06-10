import React, { Component } from "react";
import "./App.css";

import ProjectSection from "./sections/ProjectsSection/ProjectsSection";

import HomeSection from "./sections/HomeSection/HomeSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import TeamSection from "./sections/TeamSection/TeamSection";
import Footer from "./components/Footer";
import ContactSection from "./sections/ContactSection/ContactSection";
import WhatWeDoSection from "./sections/WhatWeDoSection/WhatWeDoSection";
import Banner from "./components/Banner";

class App extends Component {
	render() {
		console.log("FINISHED SET UP");
		return (
			<div className="App">
				<HomeSection />
				<AboutSection />
				<WhatWeDoSection />
				<TeamSection />
				<ProjectSection />
				<ContactSection />
				<Footer />
			</div>
		);
	}
}

export default App;
