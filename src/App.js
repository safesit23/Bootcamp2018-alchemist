import React, { Component,Fragment } from 'react';
import './App.css';
import Navbar from './conponents/Index/Navbar';
import ToptextSection from './conponents/Index/ToptextSection';
import ServicesSection from './conponents/Index/ServicesSection';
import ProjectSection from './conponents/Index/ProjectSection';
import Footer from './conponents/Index/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
      <Navbar/>
      <ToptextSection/>
      <ServicesSection/>
      <ProjectSection/>
      <Footer />
      </Fragment>
    );
  }
}

export default App;
