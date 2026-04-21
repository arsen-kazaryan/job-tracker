import { useState } from 'react'
import AddButton from '../../Button/AddButton'
import Button from '../../Button/Button'
import { jobs } from '../../data/jobCard'
import JobCard from '../../Main/JobCard/JobCard'
import './AllJobs.css'

const AllJobs = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { text: 'All', value: 'all' },
    { text: 'Applied', value: 'applied' },
    { text: 'Interview', value: 'interview' },
    { text: 'Waiting', value: 'waiting' },
    { text: 'Rejected', value: 'rejected' },
    { text: 'New', value: 'new' },
  ]

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
        <AddButton />
      </div>

      <div className="all-jobs__toolbar">
        <div className="all-jobs__search-wrapper">
          <input type="text" placeholder='Search company or position...' />
        </div>
        <div className="all-jobs__filters">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              text={filter.text}
              value={filter.value}
              activeFilter={activeFilter}
              onClick={setActiveFilter}
            />
          ))}
        </div>
      </div>

      <div className="all-jobs__jobs-section">
        <div className="all-jobs__results-header">
          <h4>Job List</h4>
          <span>{filteredJobs.length} Jobs</span>
        </div>

        <div className="all-jobs__list">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              company={job.company}
              position={job.position}
              date={job.date}
              status={job.status}
              statusType={job.statusType}
              img={job.img}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllJobs
