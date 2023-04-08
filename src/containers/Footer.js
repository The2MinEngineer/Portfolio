import React from 'react';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsMedium } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__links-left">
        <a href="https://www.linkedin.com/in/ifeanyi-emmanuel/" target="_blank">
          <SlSocialLinkedin className="links" />
        </a>
        <a href="https://github.com/pheany" target="_blank">
          <FiGithub className="links" />
        </a>
        <a href="mailto:ifeanyiemmanueljoseph@gmail.com" target="_blank">
          <HiOutlineMail className="links" />
        </a>
        <a href="https://twitter.com/mern_wiz" target="_blank">
          <FiTwitter className="links" />
        </a>
        <a href="https://medium.com/@mern_wiz" target="_blank">
          <BsMedium className="links" />
        </a>
      </div>

      <div className="footer__links-right">
        <BiCopyright className="links" />
        <p>2023 IfeanyiEmmanuel. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
