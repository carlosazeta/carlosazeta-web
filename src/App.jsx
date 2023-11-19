import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
// import { Contact } from './views/Contact'
import NavBar from './components/NavBar'

function App () {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white h-screen w-screen cursor-crosshair'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App
