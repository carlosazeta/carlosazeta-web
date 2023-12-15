import { PortfolioCard } from '../components/PortfolioCard'
import { ProjectsTable } from '../components/ProjectsTable'
export function Home () {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <PortfolioCard />
      <ProjectsTable />
    </div>
  )
}
