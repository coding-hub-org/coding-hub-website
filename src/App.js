import React, { Component } from "react";
import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import ImageView from "./components/ImageView/ImageView";
import LogoImage from "./main_assets/images/logo_vector@2x.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="section-1">
          <Navbar />
          <div className="landing-page-logo">
            <ImageView img={LogoImage} sizeInPercentage="500" />
          </div>
        </div>
        {/* <About /> */}
      </div>
    );
  }
}

export default App;
