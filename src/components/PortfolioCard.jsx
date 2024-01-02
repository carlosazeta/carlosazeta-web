export const PortfolioCard = () => {
  return (
    <div className='mt-12 mb-12 ml-6 md:ml-1'>
      <div className='mt-4'>
        <div className='text-xl font-bold text-black dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-300'>Carlos Agúndez</div>
        <p className='font-mono text-gray-500 dark:text-slate-300 mb-6 hover:text-gray-600 dark:hover:text-white transition-colors duration-300'>Frontend Developer</p>
        <p className='mt-2 text-black dark:text-slate-300 text-left hover:text-black dark:hover:text-white transition-colors duration-300'>
          I'm a frontend developer based in Spain.<br />
        </p>
        <p className='mt-2 text-black dark:text-slate-300 text-left hover:text-black dark:hover:text-white transition-colors duration-300'>
          I'm interested in everything related to JavaScript, React and web design.
        </p>
        <p className='mt-4 text-black dark:text-slate-300 text-left text-sm italic hover:text-black dark:hover:text-white transition-colors duration-300'>
          azetadev@gmail.com
        </p>
      </div>
      <div className='mt-4'>
        <a href='https://twitter.com/carlosazeta' target='_BLANK' className='mr-2 text-black dark:text-slate-300 hover:text-black dark:hover:text-white' rel='noreferrer'>
          <i className='fab fa-twitter' />
        </a>
        <a href='https://linkedin.com/in/carlos-agundez-torres' target='_BLANK' className='m-2 text-black dark:text-slate-300 hover:text-black dark:hover:text-white' rel='noreferrer'>
          <i className='fab fa-linkedin' />
        </a>
      </div>
    </div>
  )
}
