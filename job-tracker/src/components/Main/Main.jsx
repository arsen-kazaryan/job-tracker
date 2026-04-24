import './Main.css'
import HeaderSection from './HeaderSection/HeaderSection'
import JobsListCalendarContainer from './JobsListCalendarContainer/JobsListCalendarContainer'
import StatisticSection from './StatisticSection/StatisticSection'

const Main = ({ jobs }) => {
  return (
    <section className='main'>
      <HeaderSection/>
      <StatisticSection jobs={jobs} />
      <JobsListCalendarContainer jobs={jobs}/>
    </section>

  )
}

export default Main