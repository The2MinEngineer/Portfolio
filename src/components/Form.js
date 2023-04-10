import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

function Form() {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7aijaeg',
        'template_k1fylqn',
        form.current,
        'Kj8dMNwRbgkgr-lQA',
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Message sent successfully!');
          setTimeout(() => {
            setMessage('');
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setMessage('Message not sent!');
          setTimeout(() => {
            setMessage('');
          }, 5000);
        },
      );
    e.target.reset();
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
      {message && (
        <p
          className={
            message.includes('successfully')
              ? 'success-message'
              : 'error-message'
          }
          style={{ animation: 'fade-out 5s forwards' }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default Form;
