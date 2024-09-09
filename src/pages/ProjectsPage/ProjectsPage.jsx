import React, { useState } from 'react';
import Projects from './Projects';
import { projects } from '../../Data';
import '../../css/Projects.css'

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Projects key={project.id} project={project} />
          ))
        ) : (
          <p className='no-results'>Sonuç bulunamadı.</p>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;