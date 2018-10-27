import React, { Component } from "react";
import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <About /> */}
      </div>
    );
  }
}

export default App;
