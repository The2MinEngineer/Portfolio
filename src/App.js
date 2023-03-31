import React from 'react';
import Header from './containers/Header';
import Navbar from './containers/Navbar';
import Projects from './containers/Projects';
import About from './containers/About';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="app">
      <div className="white__bg">
        <Navbar />
        <Header />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
