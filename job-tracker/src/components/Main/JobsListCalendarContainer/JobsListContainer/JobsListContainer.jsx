import JobCard from '../../JobCard/JobCard'
import './JobsListContainer.css'

const JobsListContainer = () => {
  return (
    <section className='jobs-list-container'>
      <div className="jobs-list-container__header">
        <h4>Recent</h4>
        <a href="/">View All</a>
      </div>

      <div className="jobs-list-container__list">
        <JobCard
          company="EPAM Systems"
          position="Frontend Intern"
          date="18 Apr"
          status="Applied"
          statusType="applied"
        />
        <JobCard
          company="Siemens"
          position="QA Intern"
          date="17 Apr"
          status="Want to Apply"
          statusType="waiting"
        />
        <JobCard
          company="Synopsys"
          position="Software Engineer Intern"
          date="15 Apr"
          status="Interview"
          statusType="interview"
        />
      </div>
    </section>
  )
}

export default JobsListContainer
