import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

function Form() {
  const [showLoader, setShowLoader] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setShowLoader(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY,
        { user_id: process.env.REACT_APP_YOUR_PUBLIC_KEY },
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent!');
          setShowLoader(false);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>
          Name:
          <input type="text" name="name" style={{ width: '300px' }} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" style={{ width: '300px' }} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" style={{ width: '300px' }} />
        </label>
        <br />
        <div className="header__button">
          <button type="submit">Send Message</button>
        </div>
      </form>
      {showLoader && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}

export default Form;
