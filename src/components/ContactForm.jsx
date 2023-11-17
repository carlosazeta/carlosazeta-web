import React, { useState } from 'react'

export function ContactForm () {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className='container mx-auto p-8'>
      <div className='max-w-md mx-auto bg-white dark:bg-black rounded-lg overflow-hidden md:max-w-lg'>
        <div className='w-full p-4'>
          <h1 className='text-2xl font-bold text-black dark:text-white'>Contact Me</h1>
          <form onSubmit={handleSubmit} className='mt-4'>
            <div className='mb-4'>
              <label className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <input
                className='shadow appearance-none border dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-800'
                id='name'
                name='name'
                type='text'
                placeholder='Your name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='shadow appearance-none border dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-800'
                id='email'
                name='email'
                type='email'
                placeholder='Your email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2' htmlFor='message'>
                Message
              </label>
              <textarea
                className='shadow appearance-none border dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-800'
                id='message'
                name='message'
                placeholder='Your message'
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type='submit' className='bg-black dark:bg-white text-white dark:text-black font-bold py-2 px-4 rounded'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
