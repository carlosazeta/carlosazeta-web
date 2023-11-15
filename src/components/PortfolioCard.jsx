import React from 'react'

export const PortfolioCard = () => {
  return (
    <div className='mx-6 md:mx-auto max-w-sm bg-transparent overflow-hidden md:max-w-xl m-12'>
      <div className='antialiased'>
        <div className='mt-4'>
          <div className='text-xl font-bold text-black dark:text-white'>Carlos Agúndez</div>
          <p className='text-gray-500 dark:text-gray-300 mb-6'>Frontend Developer</p>
          <p className='mt-2 text-black dark:text-white text-left'>
            I'm a frontend developer based in Spain.<br />
          </p>
          <p className='mt-2 text-black dark:text-white text-left'>
            I'm interested in everything related to JavaScript, React and web design.
          </p>
        </div>
        <div className='mt-4'>
          <a href='https://twitter.com/yourusername' className='mr-2 text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300'>
            <i className='fab fa-twitter' />
          </a>
          <a href='https://linkedin.com/in/yourusername' className='m-2 text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300'>
            <i className='fab fa-linkedin' />
          </a>
        </div>
      </div>
    </div>
  )
}
