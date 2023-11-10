import React from 'react'

export const PortfolioCard = () => {
  return (
    <div className='max-w-sm mx-auto bg-transparent rounded-xl shadow-md overflow-hidden md:max-w-2xl m-6'>
      <div className='text-center'>
        <img className='h-24 w-24 object-cover rounded-full mx-auto' src='/path/to/your/image.jpg' alt='Your profile' />
        <div className='mt-4'>
          <div className='text-xl font-bold text-black dark:text-white'>Your Name</div>
          <p className='text-gray-500 dark:text-gray-300'>Your role</p>
          <p className='mt-2 text-black dark:text-white'>Short bio or description about yourself.</p>
        </div>
        <div className='mt-4'>
          <a href='https://twitter.com/yourusername' className='m-2 text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300'>
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
