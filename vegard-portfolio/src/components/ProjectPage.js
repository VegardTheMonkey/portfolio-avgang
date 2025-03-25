import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProjectPage.css';

function ProjectPage({ projects }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === parseInt(id));
  
  useEffect(() => {
    // Add class to body for overflow control
    document.body.classList.add('project-page-open');
    
    return () => {
      document.body.classList.remove('project-page-open');
    };
  }, []);
  
  if (!project) {
    return <div className="project-page-container">Project not found</div>;
  }
  
  // Define custom content for each project based on ID
  const getProjectContent = () => {
    switch(project.id) {
      case 1: // Sustainability Diary
        return {
          details: `This project involved creating a digital diary platform for students to take notes and share ideas during or after class. Students have the option to allow teachers and fellow students to read and comment on their notes. Additionally, teachers can share resources, create classrooms, and manage user accounts.

Developed as part of our "Webproject" course, this website was a collaborative effort among four classmates. Our process began with ideation, including sketches, low-fi and high-fi prototypes, roadmaps, personas, and sitemaps. We regularly communicated our progress to the project owner at each milestone, utilizing Scrum methodology for meetings and GitHub issues to delegate tasks.

The platform was built using the MERN stack (MongoDB, Express, React, Node.js), Docker for containerizing and hosting the application, and Swagger for API endpoint documentation.`,
          challenges: [
            "Implementing real-time updates for forum posts and comments",
            "Designing an intuitive user interface for our users",
            "Ensuring data security and user privacy compliance",
            "Optimizing database queries for improved performance"
          ]
        };
      
      case 2: // Super Accessor
        return {
          details: `Super Accessor is an innovative browser-based card game designed for educators. 
                   It helps teachers select appropriate assessment methods by presenting them with 
                   various cards representing different assessment techniques. The game promotes 
                   creative thinking about evaluation methods.`,
          challenges: [
            "Balancing game mechanics for educational value",
            "Creating intuitive  interfaces",
            "Implementing complex game logic with React",
            "Implementing pdf generation"
          ]
        };
      
      case 3: // Door control system
        return {
          details: `The Door Control System is a hardware-software solution developed for the 
                   university library. It utilizes Raspberry Pi devices and MQTT protocol to 
                   manage door access, track occupancy, and provide real-time statistics on 
                   library usage patterns. It uses ultrasonic sensors to detect the number of people in the library by analyzing which direction people are moving through the door. The count is sent to a different raspberry pi, which is connected to a lightstrip that shows the current number of people in the library.`,
          challenges: [
            "Integrating hardware components with software systems",
            "Ensuring reliable communication between devices",
            "Implementing secure authentication mechanisms",
            "Designing fault-tolerant systems for 24/7 operation"
          ]
        };
      
      default:
        return {
          details: "Detailed information about this project coming soon.",
          challenges: ["Challenge information not available yet."],
          improvements: ["Future improvements information not available yet."]
        };
    }
  };
  
  const content = getProjectContent();
  
  return (
    <div className="project-page-overlay">
      <div className="project-page-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
        
        <div className="project-page-content">
          <h1>{project.title}</h1>
          
          <div className="project-page-image">
            <img src={project.image} alt={project.title} />
          </div>
          
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span className="tech-tag" key={index}>{tech}</span>
            ))}
          </div>
          
          <div className="project-description">
            <h2>About this project</h2>
            <p>{project.description}</p>
            
            <h2>Project Details</h2>
            <p>{content.details}</p>
            
            <h2>Challenges</h2>
            <p>
              During the development of this project, we faced several challenges:
            </p>
            <ul>
              {content.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
            
            
            <div className="project-links">
              {project.livelink && (
                <a href={project.livelink} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Live Project
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;