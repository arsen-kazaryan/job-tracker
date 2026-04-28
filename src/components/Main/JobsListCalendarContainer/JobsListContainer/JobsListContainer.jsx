import { Link } from 'react-router-dom'
import JobCard from '../../JobCard/JobCard'
import './JobsListContainer.css'

const JobsListContainer = ({ jobs, deleteJob }) => {
  const jobSlice = jobs.slice(0, 3)
  return (
    <section className='jobs-list-container'>
      <div className="jobs-list-container__header">
        <h4>Recent</h4>
        <Link to='/alljobs'>View All!</Link>
      </div>
      <div className="jobs-list-container__list">
        {jobSlice.map((job)=>(
          <JobCard
            id={job.id}
            key={job.id}
            company={job.company}
            position={job.position}
            date={job.date}
            status={job.status}
            statusType={job.statusType}
            img={job.img}
            deleteJob={deleteJob}
          />
        )) }
      </div>
    </section>
  )
}

export default JobsListContainer
