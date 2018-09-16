import React, { Component } from 'react';
import './App.css';
import Navbar from './conponents/Index/Navbar';
import ToptextSection from './conponents/Index/ToptextSection';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <ToptextSection/>
      </div>
    );
  }
}

export default App;
