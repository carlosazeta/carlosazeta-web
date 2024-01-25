import ArrowLinkIcon from './icons/ArrowLinkIcon'
import GitHubIcon from './icons/GitHubIcon'

export function ProjectCard ({ title, stack, description, github, preview }) {
  return (
    <div className='flex flex-col justify-evenly w-[22rem] md:w-[17] h-40 p-4 rounded-lg border border-black dark:border-slate-700 dark:hover:border-slate-500 transition-all duration-300'>
      <div className='mb-2 flex items-center justify-between'>
        <a href={preview} target='_blank' className='group flex items-center text-lg' rel='noreferrer'>
          {title}
          <ArrowLinkIcon />
        </a>
        <div className='flex items-center space-x-3'>
          <a href={github} target='_blank' title='Repository' rel='noreferrer'>
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div>
      <p className='mb-2 text-sm'>{description}</p>
      <p className='font-mono text-gray-400 text-overflow:ellipsis text-sm'>{stack}</p>
      </div>
    </div>
  )
}
