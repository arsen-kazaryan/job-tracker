import { useState } from 'react'
import AddButton from '../../Button/AddButton'
import Button from '../../Button/Button'
import JobCard from '../../Main/JobCard/JobCard'
import './AllJobs.css'
import { useJobsStore } from '../../Zustand/useJobsStore'

const AllJobs = ({ jobs  }) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchValue, setSearchValue] = useState('')
  
  const resetJobs = useJobsStore((state)=> state.resetJobs) //Test функия 

  const filters = [ // Кнопки фильтра 
    { text: 'All', value: 'all' },
    { text: 'Applied', value: 'applied' },
    { text: 'Interview', value: 'interview' },
    { text: 'Waiting', value: 'waiting' },
    { text: 'Rejected', value: 'rejected' },
    { text: 'New', value: 'new' },
  ]

const filteredJobs = jobs.filter((job) => {
  const matchesStatus = activeFilter === 'all' || job.statusType === activeFilter
  //  если выбран all, тогда статус подходит для любой вакансии
  //  иначе сравниваем статус вакансии с выбранным фильтром

  const matchesSearch = job.company.toLowerCase().includes(searchValue.toLowerCase()) || job.position.toLowerCase().includes(searchValue.toLowerCase())
  // поиск по company or position в не зависимости от регитсра  

  return matchesStatus && matchesSearch
  // возвращает вакансии который подохдят и по статусу и по поиску
})

  return (
    <section className='all-jobs'>
      <div className="all-jobs__header">
        <div className="all-jobs__title-wrapper">
          <h2>All Jobs</h2>
          <p>Manage your applications in one place.</p>
        </div>
        <AddButton onClick={resetJobs} text='ResetJobs(Test)'/>
        <AddButton />
      </div>

      <div className="all-jobs__toolbar">
        <div className="all-jobs__search-wrapper">
          <input type="text" placeholder='Search company or position...' value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} />
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
            id={job.id}
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
