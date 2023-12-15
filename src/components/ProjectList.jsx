import { ProjectCard } from './ProjectCard'

export function ProjectList () {
  return (
    <div>
      <h2 className='mb-4 ml-1 text-xl'>Projects</h2>
      <div className='grid grid-cols1 gap-4 sm:grid-cols-2'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

    </div>
  )
}
