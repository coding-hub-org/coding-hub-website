import React, { Component } from "react";
import "./App.css";
// import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Section6 from "./components/Section6/Section6";
import Footer from "./components/Footer/Footer";
import ImageView from "./components/ImageView/ImageView";
import LogoImage from "./main_assets/images/logo_vector@2x.png";

class App extends Component {
  contactUs =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quasi porro vero fugit dolore, error praesentium dolores quis ex nostrum quae totam sint, maiores qui perferendis corporis consequuntur rerum. Nam?";
  render() {
    return (
      <div className="App">
        <div className="section-1">
          <Navbar />
          <div className="landing-page-logo">
            <ImageView img={LogoImage} sizeInPixels="600" />
          </div>
        </div>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 description={this.contactUs} />
        <Footer />
      </div>
    );
  }
}

export default App;
