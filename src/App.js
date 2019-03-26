import React, { Component } from "react";
import "./App.css";
// import About from "./components/About/About";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section3End from "./components/Section3/Section3End";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Section6 from "./components/Section6/Section6";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home"
import Section1 from "./components/Section1/Section1";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Section1 />*/}
        <Home/>
        <Section2 />
        <Section3 />
        <Section3End />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    );
  }
}

export default App;
