// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './components/About';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

const App = () => {
  return (
      <div>
        <Navbar />
        <Homepage />
        {/*<Skills />*/}
        {/*<Experience />*/}
        {/*<Projects />*/}
        {/*<Contact />*/}
        {/*<Footer />*/}
      </div>
  );
};

export default App;

