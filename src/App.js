import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';

import Navbar from './containers/Navbar';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="app">
      <div className="white__bg">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
