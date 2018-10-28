import React, { Component } from "react";
import "./App.css";
// import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Section3 from "./components/Section3/Section3";
import ImageView from "./components/ImageView/ImageView";
import LogoImage from "./main_assets/images/logo_vector@2x.png";

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
        <div className="section-2">{/* <About /> */}</div>
        <div className="section-3">
          <Section3 />
        </div>
      </div>
    );
  }
}

export default App;
