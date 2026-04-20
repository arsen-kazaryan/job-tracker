import './Main.css'
import HeaderSection from './HeaderSection/HeaderSection'
import JobsListCalendarContainer from './JobsListCalendarContainer/JobsListCalendarContainer'
import StatisticSection from './StatisticSection/StatisticSection'

const Main = () => {
  return (
    <section className='main'>
      <HeaderSection/>
      <StatisticSection/>
      <JobsListCalendarContainer/>
    </section>

  )
}

export default Main