import { PortfolioCard } from '../components/PortfolioCard'
import { ProjectsTable } from '../components/ProjectsTable'
export function Home () {
  return (
    <div className='pb-1'>
      <PortfolioCard />
      <ProjectsTable />
    </div>
  )
}
