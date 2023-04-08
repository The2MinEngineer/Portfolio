import React from 'react';
import './Contact.css';
import Form from '../components/Form';

function Contact() {
  return (
    <div className="contact">
      <h2>Would Love To Hear From You</h2>
      <div className='contact__details'>
      <div className="contact__left">
        <p>
          I am currently interested in a “Full-time Full-stack developer role“
          with a major on “MERN stack“, but still open to other opportunities.
          However, if you have other requests or questions, don’t hesitate to
          use the form.
        </p>
        <Form />
      </div>
      <div className="contact__right">
        <h1>Thanks for checking out my Portfolio</h1>
      </div>
      </div>
    </div>
  );
}

export default Contact;
