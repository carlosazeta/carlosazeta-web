import './App.css'
import NavBar from './components/NavBar'
import { PortfolioCard } from './components/PortfolioCard'

function App () {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white h-screen w-screen'>
      <NavBar />
      <PortfolioCard />
    </div>
  )
}

export default App
