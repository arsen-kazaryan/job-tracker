import { useState } from 'react'
import { jobs } from '../../data/jobCard'
import JobCard from '../../Main/JobCard/JobCard'
import './AllJobs.css'

const AllJobs = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const filteredJobs = jobs.filter((job) => {
  if (activeFilter === 'all') {
    return true
  }

  return job.statusType === activeFilter
})

  return (
    <section className='all-jobs'>
      <div className="all-jobs__header">
        <div className="all-jobs__title-wrapper">
          <h2>All Jobs</h2>
          <p>Manage your applications in one place.</p>
        </div>
        <button className="all-jobs__add-button">+ Add Job</button>
      </div>

      <div className="all-jobs__toolbar">
        <div className="all-jobs__search-wrapper">
          <input type="text" placeholder='Search company or position...' />
        </div>
        <div className="all-jobs__filters">
          <button className={activeFilter === 'all' ? "all-jobs__filter-button all-jobs__filter-button--active" : "all-jobs__filter-button"} onClick={()=> setActiveFilter('all')}>All</button>
          <button className={activeFilter === 'applied' ? "all-jobs__filter-button all-jobs__filter-button--active" : "all-jobs__filter-button"} onClick={()=> setActiveFilter('applied')}>Applied</button>
          <button className={activeFilter === 'interview' ? "all-jobs__filter-button all-jobs__filter-button--active" : "all-jobs__filter-button"} onClick={()=> setActiveFilter('interview')}>Interview</button>
          <button className={activeFilter === 'waiting' ? "all-jobs__filter-button all-jobs__filter-button--active" : "all-jobs__filter-button"} onClick={()=> setActiveFilter('waiting')}>Waiting</button>
          <button className={activeFilter === 'rejected' ? "all-jobs__filter-button all-jobs__filter-button--active" : "all-jobs__filter-button"} onClick={()=> setActiveFilter('rejected')}>Rejected</button>
        </div>
      </div>

      <div className="all-jobs__jobs-section">
        <div className="all-jobs__results-header">
          <h4>Job List</h4>
          <span>{jobs.length} Jobs</span>
        </div>

        <div className="all-jobs__list">
          {
            filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                company={job.company}
                position={job.position}
                date={job.date}
                status={job.status}
                statusType={job.statusType}
                img={job.img}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default AllJobs
