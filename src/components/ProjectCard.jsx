/* eslint-disable react/prop-types */
export function ProjectCard ({ title, stack, github, preview }) {
  return (
    <div className='flex flex-col w-[21rem] md:w-[17] max-h-24 p-4 rounded-lg border border-black dark:border-slate-700 dark:hover:border-slate-500 transition-all duration-300'>
      <div className='mb-2 flex items-center justify-between'>
        <a href={preview} target='_blank' className='group flex items-center text-lg' rel='noreferrer'>
          {title}
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='ml-2 h-4 w-4 group-hover:translate-y-[-2px] transition-transform'>
            <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25' />
          </svg>
        </a>
        <div className='flex items-center space-x-3'>
          <a href={github} target='_blank' title='Repository' rel='noreferrer'>
            <svg width='20' height='20' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg' className='text-slate-500 transition-colors duration-150 hover:text-slate-300'>
              <path fillRule='evenodd' d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.44-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.72 7.72 0 018 4.83c.68 0 1.36.09 2 .26 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.88 3.75-3.66 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z' />
            </svg>
          </a>
        </div>
      </div>
      <p className='font-mono text-gray-400 text-overflow:ellipsis text-sm'>{stack}
      </p>
    </div>
  )
}
