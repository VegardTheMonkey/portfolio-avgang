import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#top">VEGARD</a>
        </div>
        <div className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`mobile-back-button ${mobileMenuOpen ? 'visible' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About Me</a></li>
            <li><a href="#technologies" onClick={() => setMobileMenuOpen(false)}>Technologies</a></li>
            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 