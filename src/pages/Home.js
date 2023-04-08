import React from 'react';
import './Home.css';
import Header from '../containers/Header';
import Projects from '../containers/Projects';

function Home() {
  return (
    <div className="home">
      <Header />
      <Projects />
    </div>
  );
}

export default Home;
