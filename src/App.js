import React, { Component } from "react";
import "./App.css";
// import About from "./components/About/About";
// import Section2 from "./components/Section2/Section2";
// import Section3 from "./components/Section3/Section3";
// import Section3End from "./components/Section3/Section3End";
// import Section4 from "./components/Section4/Section4";
// import Section6 from "./components/Section6/Section6";
// import ProjectSection from "./sections/ProjectsSection/ProjectsSection";

import HomeSection from "./sections/HomeSection/HomeSection";
import TeamSection from "./sections/TeamSection/TeamSection";
import Footer from "./components/Footer";
import ContactSection from "./sections/ContactSection/ContactSection";

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Home/>
        <Section2 />
        <Section3 />
        <Section3End /> */}
				{/* <Section4 /> */}
				{/* <Section5 /> */}
				{/* <ProjectSection/> 
        <Section6 /> */}
				<HomeSection />
				<TeamSection />
				<ContactSection />
				<Footer />
			</div>
		);
	}
}

export default App;
