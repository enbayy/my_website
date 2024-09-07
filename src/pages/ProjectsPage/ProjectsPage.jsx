import React from 'react'
import { projects } from '../../Data'
import Projects from './Projects'
import '../../css/Projects.css'

function ProjectsPage() {
  return (
    <div className='projects'>
      {
        projects?.map((project) => (
          <Projects key={project.id} project={project} />
        ))
      }
    </div>
  )
}

export default ProjectsPage