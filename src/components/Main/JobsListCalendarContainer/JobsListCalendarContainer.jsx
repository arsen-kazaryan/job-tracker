import CalendarContainer from './CalendarContainer/CalendarContainer'
import './JobsListCalendarContainer.css'
import JobsListContainer from "./JobsListContainer/JobsListContainer"

const JobsListCalendarContainer = ({ jobs, deleteJob}) => {
  return (
    <section className="jobs-list-calendar-container">
      <JobsListContainer jobs={jobs} deleteJob={deleteJob}/>
      <CalendarContainer/>
    </section>
  )
}

export default JobsListCalendarContainer