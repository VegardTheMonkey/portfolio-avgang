import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';

// images
import susForum from './images/sus-forum.png';
import superAccessor from './images/super-accessor.jpg';
import doorControl from './images/door-counter.jpg';

function App() {
  const projects = [
    {
      id: 1,
      title: 'Sustainability Diary',
      description: 'A full-stack forum for students to reflect on sustainability',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      paragraph: 'https://team3.sustainability.it.ntnu.no/',
      image: susForum,
      livelink: 'https://team3.sustainability.it.ntnu.no/',
      github: 'https://github.com/Hannah-Sofie/SustainabilityDiary',
    },
    {
      id: 2,
      title: 'Super Accessor',
      description: 'A card game in the browser to help teachers choose accessment methods',
      technologies: ['React', 'Express', 'MongoDB'],
      image: superAccessor,
      github: 'https://github.com/maheggh/cardgame',
    },
    {
      id: 3,
      title: 'Door control system',
      description: 'We created a door control system designed for the universities library',
      technologies: ['Node-RED', 'MQTT', 'Raspberry Pi'],
      image: doorControl,
    },
  ];;

  useEffect(() => {
    // Function to implement fade-in animation on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('fade-in', 'active');
        }
      });
    };

    // Add initial classes to all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('fade-in');
    });

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on initial load
    handleScroll();
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <AboutMe />
          <Technologies />
          <Projects projects={projects} />
          <Routes>
            <Route path="/project/:id" element={<ProjectPage projects={projects} />} />
          </Routes>
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
