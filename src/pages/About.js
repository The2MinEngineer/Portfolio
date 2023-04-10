import React from 'react';
import './About.css';
import myPic from '../assets/myPic.png';

function About() {
  return (
    <div className="about">
      <div className="about__top">
        <img src={myPic} alt="myPic" />
      </div>
      <div className="about__buttom">
        <div className="about__buttom-logo">
          <h2>IFEANYI EMMANUEL</h2>
        </div>
        <div className="about__buttom-content">
          <p>
            Hi, my name is Ifeanyi Emmanuel from Lagos, Nigeria, and I am a
            software engineer with a passion for writing and teaching about
            programming. I have almost two years of experience in the field, and
            I specialize in using JavaScript to develop web applications.
          </p>
          <p>
            Aside from my software development skills, I am also an experienced
            technical writer. I love sharing my knowledge of programming with
            others, and I have written numerous articles on topics such as
            JavaScript, React, and Node.js. My articles are well-researched and
            easy to understand, making them accessible to both beginner and
            advanced programmers.
          </p>
          <p>
            In addition to writing, I also enjoy teaching. I have conducted a
            workshop for over 20 developers, where I taught them the basics of
            Redux and how to start using it in their projects. This experience
            allowed me to hone my teaching skills and gave me a great sense of
            satisfaction in seeing others learn and grow in their programming
            abilities.
          </p>
          <p>
            When it comes to software development, I primarily focus on the MERN
            stack, but I am comfortable using other technologies when necessary.
            I am a problem solver at heart and love the challenge of finding
            creative solutions to complex issues.
          </p>
          <p>
            Overall, I am a highly motivated and innovative engineer with a
            passion for writing and teaching about programming. I am committed
            to delivering high-quality software solutions and sharing my
            knowledge with others in the programming community.
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
      </div>
    </div>
  );
}

export default About;
