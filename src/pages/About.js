import React from 'react';
import './About.css';
import myPic from '../assets/myPic.png';

function About() {
  return (
    <div className="about">
      <div className="about__top">
        <img src={myPic} alt='myPic' />
      </div>
      <div className="about__buttom">
        <div className="about__buttom-logo">
          <h2>IFEANYI EMMANUEL</h2>
        </div>
        <div className="about__buttom-content">
          <p>
            Greetings, I'm Ifeanyi Emmanuel, a passionate frontend developer
            with 2+ years of experience creating stunning, responsive, and
            user-friendly websites and applications. My strength lies in my
            attention to detail, which allows me to craft visually appealing
            interfaces that enhance user experiences and deliver measurable
            results.
          </p>
          <p>
            My exceptional communication skills enable me to convey complex
            technical concepts to both technical and non-technical stakeholders
            effectively. My ability to collaborate with cross-functional teams
            is crucial to delivering high-quality projects on time and within
            budget. With experience in agile methodologies and tools like Trello
            and Slack, I am a skilled team player who excels in collaborative
            environments.
          </p>
          <p>
            As a frontend developer, I love taking on challenging projects that
            push the limits of what's possible and require me to think
            creatively to solve complex problems. I am committed to lifelong
            learning and staying up-to-date with emerging technologies and best
            practices to provide the best possible solutions to my clients.
          </p>
          <p>
            My technical expertise includes languages such as HTML, CSS,
            JavaScript, and TypeScript. I am also proficient in frameworks,
            libraries, and other tools such as Reactjs, Nodejs, MongoDB,
            ExpressJs, Tailwind CSS, Bootstrap, Nextjs, Redux, Material UI, Git,
            and GitHub. And, of course, Googling, which is essential for staying
            up-to-date in this fast-moving industry.
          </p>
          <p>
            Thank you for taking the time to learn more about me, and I am
            excited about the opportunity to contribute my skills and passion to
            your organization.
          </p>
          <div className="header__button">
            <button type="button">Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
