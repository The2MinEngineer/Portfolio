import React from 'react';
import './About.css';
import profileImage from '../assets/ProfileImage.png';

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about__details">
        <div className="about__row1">
          <img src={profileImage} alt="profile" />
          <div className="header__button">
            <button type="button">Download Resume</button>
          </div>
          <p>
            Facilitated a workshop centered on the fundamental principles of
            Redux and its practical application in software development
            projects.
          </p>
        </div>
        <div className="about__row2">
          <p>
            Hello, my name is Ifeanyi Emmanuel, and I am a passionate frontend
            developer with 2 years of experience in creating beautiful,
            responsive, and user-friendly websites and applications. With a
            strong attention to detail, I take pride in crafting visually
            stunning interfaces that enhance user experiences and deliver
            measurable results. Beyond my technical expertise, I am an effective
            communicator who can convey complex technical concepts to both
            technical and non-technical stakeholders. My ability to clearly
            articulate ideas and collaborate with cross-functional teams is key
            to my success in delivering high-quality projects on time and within
            budget.
          </p>
          <p>
            I am also a team player who thrives in collaborative environments
            and have experience using agile methodologies and tools such as
            Trello and Slack. My strong interpersonal skills enable me to build
            and maintain positive relationships with colleagues, clients, and
            vendors.
          </p>
        </div>
        <div className="about__row3">
          <p>
            As a frontend developer, I am always looking for new opportunities
            to learn and grow my skills. I enjoy taking on challenging projects
            that push the boundaries of what's possible and require me to think
            creatively to solve complex problems. With a commitment to lifelong
            learning, I stay up-to-date with emerging technologies and best
            practices to ensure that I am always providing the best possible
            solutions to clients. Thank you for taking the time to learn more
            about me, and I look forward to the opportunity to contribute my
            skills and passion to your organization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
