export function ProjectCard () {
  return (
    <div className='flex flex-col w-[17rem] p-4 rounded-lg border border-black dark:border-slate-700 dark:hover:border-slate-500 transition-all duration-300'>
      <div className='mb-2 flex items-center justify-between'>
        <a href='https://markdown-converter-eosin.vercel.app/' target='_blank' className='group text-lg font-medium' rel='noreferrer'> Markdown Converter</a>
        <div className='flex items-center space-x-3'><a href='https://github.com/carlosazeta/markdown-converter' target='_blank' title='Repository' rel='noreferrer'><svg width='20' height='20' strokeWidth='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='currentColor' className='text-slate-500 transition-colors duration-150 hover:text-slate-300' name='Github'><path d='M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' /></svg></a></div>
      </div>
      <p className='text-gray-400'>React - TypeScript
      </p>
    </div>
  )
}
