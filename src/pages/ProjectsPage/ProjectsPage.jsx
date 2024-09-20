import React, { useState } from 'react';
import Projects from './Projects';
import { projects } from '../../Data';
import '../../css/Projects.css';

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <div>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Projelerde ara...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='search-input'
        />
      </div>
      <div className='project-main'>
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project) => (
            <Projects key={project.id} project={project} />
          ))
        ) : (
          <p className='no-results'>Sonuç bulunamadı.</p>
        )}
      </div>
      {filteredProjects.length > 6 && (
        <div className='button-container'>
          {!showAll ? (
            <button className='show-more' onClick={() => setShowAll(true)}>
              Devamını Gör
            </button>
          ) : (
            <button className='show-less' onClick={() => setShowAll(false)}>
              Eski Haline Dön
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;