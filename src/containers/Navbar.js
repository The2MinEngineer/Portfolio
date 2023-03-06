import React, { useState } from 'react';
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
            <a href="#project">Projects</a>
          </p>
          <p>
            <a href="#aboutme">About me</a>
          </p>
          <p>
            <a href="#blog">Blog</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
      </div>
      <div className="portfolio__navbar-sign">
        <button type="button">Send Me an Email</button>
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
                <a href="#project">Projects</a>
              </p>
              <p>
                <a href="#aboutme">About me</a>
              </p>
              <p>
                <a href="#blog">Blog</a>
              </p>
              <p>
                <a href="#contact">Contact</a>
              </p>
              <div className="portfolio__navbar-menu_container-links-sign">
                <button type="button">Send Me an Email</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
