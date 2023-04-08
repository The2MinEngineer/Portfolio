import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>Hi, I'm Ifeanyi Emmanuel. Software Engineer</h1>
      <p>
        Taking on challenging projects can foster personal and professional
        development by promoting creativity, expanding knowledge, and enhancing
        problem-solving abilities.
      </p>
      <div className="header__button">
        <button type="button">
          <a
            href="https://drive.google.com/uc?export=download&id=1HY329XidR9qTLVPX5PqOXkBjnh96Fydi
            "
            download="IFEANYI-EMMANUEL-RESUME.pdf"
            class="download-link"
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default Header;
