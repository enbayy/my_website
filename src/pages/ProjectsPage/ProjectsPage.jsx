import React from 'react'
import { projects } from '../../Data'
import Projects from './Projects'

function ProjectsPage() {
  return (
    <div>
      {
        projects?.map((project) => (
          <Projects key={project.id} project={project} />
        ))
      }
    </div>
  )
}

export default ProjectsPage