import { ProjectCard } from './ProjectCard'
import { projectsData } from '../data/projectsData'
export function ProjectList () {
  return (
    <div>
      <h2 className='mb-4 ml-1 text-xl'>Projects</h2>
      <div className='grid grid-cols1 gap-4 sm:grid-cols-2'>
        {projectsData.map(project => (
          <div key={project.id}>
            <ProjectCard
              title={project.title}
              stack={project.stack}
              description={project.description}
              github={project.githubUrl}
              preview={project.previewUrl}
            />
          </div>
        ))}
      </div>

    </div>
  )
}
