import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
        <div className="portfolio__navbar-links_logo">
          <p>Ifeanyi Emmanuel</p>
        </div>
        <div className="portfolio__navbar-links_container">
          <p>
            <Link to="/">Projects</Link>
          </p>
          <p>
            <Link to="/About">About me</Link>
          </p>
          <p>
            <a href="https://medium.com/@mern_wiz" target="_blank">
              Blog
            </a>
          </p>
          <p>
            <Link to="/Contact">Contact</Link>
          </p>
        </div>
      </div>
      <div className="portfolio__navbar-sign">
        <button type="button">
          <a href="mailto:ifeanyiemmanueljosepn@gmail.com">Send Me an Email</a>
        </button>
      </div>
      <div className="portfolio__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="portfolio__navbar-menu_container scale-up-center">
            <div className="portfolio__navbar-menu_container-links">
              <p>
                <Link to="/">Projects</Link>
              </p>
              <p>
                <Link to="/About">About me</Link>
              </p>
              <p>
                <a href="https://medium.com/@mern_wiz" target="_blank">
                  Blog
                </a>
              </p>
              <p>
                <Link to="/Contact">Contact</Link>
              </p>
              <div className="portfolio__navbar-menu_container-links-sign">
                <button type="button">
                  <a href="mailto:ifeanyiemmanueljosepn@gmail.com">
                    Send Me an Email
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
