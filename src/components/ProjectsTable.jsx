export function ProjectsTable () {
  return (
    <>
      <div className='mx-6 md:mx-auto max-w-sm overflow-hidden md:max-w-xl m-12'>
        <div className='overflow-x-auto relative shadow-md sm:rounded-lg border border-black dark:border-slate-700 dark:hover:border-slate-500 hover:shadow-lg hover:shadow-white/50 transition-all duration-300'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-gray-400'>
              <tr>
                <th scope='col' className='py-3 px-6 w-1/3'>Project</th>
                <th scope='col' className='py-3 px-6 w-1/3'>Technologies</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white dark:bg-black'>
                <td className='py-4 px-6'>Songs Match</td>
                <td className='py-4 px-6'>React TypeScript Tailwind FramerMotion</td>
                <td className='py-4 px-6'>
                  <a href='https://github.com/carlosazeta/top-songs' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Code</a>
                </td>
                <td className='py-4 px-6'>
                  <a href='https://top-songs-six.vercel.app/' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Preview</a>
                </td>
              </tr>
              <tr className='bg-white dark:bg-black'>
                <td className='py-4 px-6'>Nike Shop</td>
                <td className='py-4 px-6'>React TypeScript</td>
                <td className='py-4 px-6'>
                  <a href='https://github.com/carlosazeta/nike-shop' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Code</a>
                </td>
                <td className='py-4 px-6'>
                  <a href='https://nike-shop-sepia.vercel.app/' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Preview</a>
                </td>
              </tr>
              <tr className='bg-white dark:bg-black'>
                <td className='py-4 px-6'>Book Reading List</td>
                <td className='py-4 px-6'>React JavaScript</td>
                <td className='py-4 px-6'>
                  <a href='https://github.com/carlosazeta/book-list' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Code</a>
                </td>
                <td className='py-4 px-6'>
                  <a href='https://book-list-nu-two.vercel.app/' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Preview</a>
                </td>
              </tr>
              <tr className='bg-white dark:bg-black'>
                <td className='py-4 px-6'>Guess Pokemon</td>
                <td className='py-4 px-6'>React JavaScript</td>
                <td className='py-4 px-6'>
                  <a href='https://github.com/carlosazeta/guess-pokemon' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Code</a>
                </td>
                <td className='py-4 px-6'>
                  <a href='https://guess-pokemon-chi.vercel.app/' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Preview</a>
                </td>
              </tr>
              <tr className='bg-white dark:bg-black'>
                <td className='py-4 px-6'>To do</td>
                <td className='py-4 px-6'>React TypeScript</td>
                <td className='py-4 px-6'>
                  <a href='https://github.com/carlosazeta/todo-ts' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Code</a>
                </td>
                <td className='py-4 px-6'>
                  <a href='https://todo-ts-brown.vercel.app/' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Preview</a>
                </td>
              </tr>
              <tr className='bg-white dark:bg-black'>
                <td className='py-4 px-6'>Tic Tac Toe</td>
                <td className='py-4 px-6'>React JavaScript</td>
                <td className='py-4 px-6'>
                  <a href='https://github.com/carlosazeta/tic-tac-toe' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Code</a>
                </td>
                <td className='py-4 px-6'>
                  <a href='https://tic-tac-toe-dun-five-54.vercel.app/' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Preview</a>
                </td>
              </tr>
              <tr className='bg-white dark:bg-black'>
                <td className='py-4 px-6'>Cat Meme Generator</td>
                <td className='py-4 px-6'>React JavaScript</td>
                <td className='py-4 px-6'>
                  <a href='https://github.com/carlosazeta/cat-meme-generator' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Code</a>
                </td>
                <td className='py-4 px-6'>
                  <a href='https://cat-meme-generator.vercel.app/' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Preview</a>
                </td>
              </tr>
              <tr className='bg-white dark:bg-black'>
                <td className='py-4 px-6'>Weather App</td>
                <td className='py-4 px-6'>React Native JavaScript</td>
                <td className='py-4 px-6'>
                  <a href='https://github.com/carlosazeta/WeatherApp' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Code</a>
                </td>
              </tr>
              <tr className='bg-white dark:bg-black'>
                <td className='py-4 px-6'>Users CRUD</td>
                <td className='py-4 px-6'>React TypeScript</td>
                <td className='py-4 px-6'>
                  <a href='https://github.com/carlosazeta/users-crud' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Code</a>
                </td>
                <td className='py-4 px-6'>
                  <a href='https://users-crud-zeta.vercel.app/' target='_blank' className='text-black dark:text-white hover:underline' rel='noreferrer'>Preview</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
