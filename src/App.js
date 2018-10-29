import React, { Component } from "react";
import "./App.css";
// import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Footer from "./components/Footer/Footer";
import ImageView from "./components/ImageView/ImageView";
import LogoImage from "./main_assets/images/logo_vector@2x.png";
import About from "./components/About/About"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="section-1">
          <Navbar />
          <div className="landing-page-logo">
            <ImageView img={LogoImage} sizeInPixels="600" />
          </div>
        </div>
        <About title="ABOUT" description="test"/>

        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    );
  }
}

export default App;
