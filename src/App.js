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
import Section1 from "./components/Section1/Section1";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    );
  }
}

export default App;
