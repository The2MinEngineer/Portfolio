import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>Hi! I'm Ifeanyi. Building Better Web Solutions</h1>
      <p>
        Taking on challenging projects can foster personal and professional
        development by promoting creativity, expanding knowledge, and enhancing
        problem-solving abilities.
      </p>
      <div className="header__button">
        <button type="button">Download Resume</button>
      </div>
    </div>
  );
}

export default Header;
