import { Link } from 'react-router-dom'
import { jobs } from '../../../data/jobCard.js'
import JobCard from '../../JobCard/JobCard'
import './JobsListContainer.css'

const JobsListContainer = () => {
  const jobSlice = jobs.slice(0, 3)
  return (
    <section className='jobs-list-container'>
      <div className="jobs-list-container__header">
        <h4>Recent</h4>
        <Link to='/alljobs'>View All</Link>
      </div>
      <div className="jobs-list-container__list">
        {jobSlice.map((job)=>(
          <JobCard
            key={job.id}
            company={job.company}
            position={job.position}
            date={job.date}
            status={job.status}
            statusType={job.statusType}
            img={job.img}
          />
        )) }
      </div>
    </section>
  )
}

export default JobsListContainer
