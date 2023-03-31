import React from 'react';
import Project from '../components/Project';
import Bugoff from '../assets/Bugoff.png';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <div className="projects__head">
        <h2 className="projects__header">Projects</h2>
      </div>
      <div className="projects__project">
        <div className='backgroundColor1'>
          <Project
            imageSrc={Bugoff}
            header="Bugoff"
            paragraph="Engaging in challenging projects can facilitate personal and professional growth by expanding your knowledge and skillset and promoting creativity."
          />
        </div>
        <div className='backgroundColor2'>
          <Project
            imageSrc={Bugoff}
            header="Bugoff"
            paragraph="Engaging in challenging projects can facilitate personal and professional growth by expanding your knowledge and skillset and promoting creativity."
          />
        </div>
        <div className='backgroundColor3'>
          <Project
            imageSrc={Bugoff}
            header="Bugoff"
            paragraph="Engaging in challenging projects can facilitate personal and professional growth by expanding your knowledge and skillset and promoting creativity."
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
