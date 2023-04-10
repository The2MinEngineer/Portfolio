import React from 'react';
import './Header.css';
import developer_male from '../assets/develoepr_male.png';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1>Hi, I'm Ifeanyi Emmanuel. Software Engineer</h1>
        <p>
          Innovative and highly motivated engineer. Seeking to use proven skills
          in software development, technical writing and leadership to meet
          business needs.
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
      <div className="header__right">
        <img src={developer_male} alt="developer_male" />
      </div>
    </div>
  );
}

export default Header;
