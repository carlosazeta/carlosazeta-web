import React, { useState } from 'react'
import { useDark } from '../hooks/useDark'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [darkMode, setDarkMode] = useDark()

  return (
    <nav className='flex items-center justify-between p-6'>
      <div className='flex justify-between mr-6 w-full'>
        <div>
          <a className='font-semibold text-xl cursor-pointer'>Azeta</a>
        </div>
        <div className='flex gap-4'>
          <button
            className='font-semibold text-xl'
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode
              ? (
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='h-6 w-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
                </svg>
                )
              : (
                <svg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 24 24' className='h-6 w-6'>
                  <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
                </svg>
                )}
          </button>
          <a href='https://github.com/carlosazeta' target='_blank' rel='noopener noreferrer' className='font-semibold text-xl cursor-pointer'>
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 fill-current'>
              <title>GitHub icon</title>
              <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.6-.015 2.89-.015 3.285 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
            </svg>
          </a>
          <a className='hidden lg:block ' href=''>Projects</a>
          <a className='hidden lg:block ' href=''>Contact</a>
        </div>
      </div>
      <div className='block lg:hidden'>
        <button
          className='flex items-center px-1 py-2 dark:text-gray-200 text-black'
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu
            ? (
              <svg className='fill-current h-4 w-4' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Close</title><path d='M10 8.586l4.293-4.293 1.414 1.414L11.414 10l4.293 4.293-1.414 1.414L10 11.414l-4.293 4.293-1.414-1.414L8.586 10 4.293 5.707l1.414-1.414L10 8.586z' /></svg>
              )
            : (
              <svg className='fill-current h-4 w-4' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Menu</title><path d='M0 6h24v2H0V6zm0 10h24v2H0v-2z' /></svg>
              )}
        </button>
        {showMenu && (
          <div className='absolute top-20 right-0 bg-gray-800 py-2 px-4 rounded shadow-lg'>
            <a href='#' className='block text-gray-200 hover:text-white py-2'>Contact</a>
            <a href='#' className='block text-gray-200 hover:text-white py-2'>Projects</a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
