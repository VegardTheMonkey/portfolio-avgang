import React from 'react';
import profileImage from '../images/meg.jpg';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img src={profileImage} alt="Vegard" className="hero-image" />
          </div>
          <h1>Vegard's Portfolio</h1>
          <p className="hero-subtitle">Frontend & Backend Developer</p>
          <p className="hero-description">
            I am a developer from Norway who loves to code and create new projects.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary-btn">View My Work</a>
            <a href="#contact" className="hero-btn secondary-btn">Contact Me</a>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <span className="scroll-text">Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero; 