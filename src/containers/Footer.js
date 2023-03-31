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
        <SlSocialLinkedin className='links' />
        <FiGithub className='links' />
        <HiOutlineMail className='links' />
        <FiTwitter className='links' />
        <BsMedium className='links' />
      </div>
      <div className="footer__links-right">
        <BiCopyright className='links' />
        <p>2023 IfeanyiEmmanuel. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
