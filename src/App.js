import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./components/About/About";

class App extends Component {
  render() {
    return (
      <div className="App">

        <About/>

      </div>
    );
  }
}

export default App;
