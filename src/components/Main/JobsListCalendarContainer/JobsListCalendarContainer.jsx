import CalendarContainer from './CalendarContainer/CalendarContainer'
import './JobsListCalendarContainer.css'
import JobsListContainer from "./JobsListContainer/JobsListContainer"

const JobsListCalendarContainer = ({ jobs }) => {
  return (
    <section className="jobs-list-calendar-container">
      <JobsListContainer jobs={jobs}/>
      <CalendarContainer/>
    </section>
  )
}

export default JobsListCalendarContainer