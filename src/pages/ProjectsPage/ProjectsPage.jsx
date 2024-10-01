import React, { useState } from 'react';
import Projects from './Projects';
import { projects } from '../../Data';
import '../../css/Projects.css';

function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    if (currentIndex < projects.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayedProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <div className='projects-container'>
      <div className='button-container'>
        <button className='nav-button prev' onClick={prevProject}>
          ‹
        </button>
        <div className='project-main'>
          {displayedProjects.map((project) => (
            <Projects key={project.id} project={project} />
          ))}
        </div>
        <button className='nav-button next' onClick={nextProject}>
          ›
        </button>
      </div>
    </div>
  );
}

export default ProjectsPage;
