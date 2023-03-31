import React from 'react';
import './Project.css';

function Project({ imageSrc, header, paragraph }) {
  return (
    <div className="project">
      <img src={imageSrc} alt="project" />
      <div className="project__text">
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Project;
