import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
            Hi, I'm Vegard Madsen, a web developer with both backend and front end skills. I have a passion for creating user-friendly and visually appealing websites. With experience in various technologies, I strive to deliver high-quality solutions.
            </p>
            <p>
              When I'm not coding, you might find me exploring new technologies, hanging out at the gym or playing video games.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe; 