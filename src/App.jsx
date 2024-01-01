import './App.css'
import NavBar from './components/NavBar'
import { PortfolioCard } from './components/PortfolioCard'
import { ProjectList } from './components/ProjectList'

function App () {
  return (
    <div className='flex flex-col items-center min-h-screen bg-white text-black dark:bg-black dark:text-white cursor-crosshair'>
      <NavBar />
      <div className='flex flex-col items-center md:items-start'>
        <PortfolioCard />
        <ProjectList />
      </div>
    </div>
  )
}

export default App
