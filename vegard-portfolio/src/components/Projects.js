import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects({ projects }) {
  // If projects aren't passed as props, use the local projects array
  const projectsData = projects || [];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <Link to={`/project/${project.id}`} className="project-card-link" key={project.id}>
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span className="tech-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                  <div className="view-project-button">
                    Read More
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 