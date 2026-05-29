import { useState } from 'react'
import AddButton from '../../components/Button/AddButton'
import Button from '../../components/Button/Button'
import JobCard from '../../components/Main/JobCard/JobCard'
import './AllJobs.css'
import { useSearchParams } from 'react-router-dom'
import { useJobsStore } from '../../Store/useJobsStore'

const AllJobs = () => {
  const jobs = useJobsStore(state => state.jobs)
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchParams, setSearchParams] = useSearchParams()

  const searchValue = searchParams.get('search') || ''; // ,берем текст (из ?search=...)если там пусто то '' [аналог стейт]

  const handleInputChange = (e) => {
    setSearchParams({ search: e.target.value })// обновляет URL и ставит  в search  То что я ввел    
  }


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

    const matchesSearch = job.company.toLowerCase().includes(searchValue.toLowerCase().trim()) || job.position.trim().toLowerCase().includes(searchValue.toLowerCase().trim())
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
        <AddButton />
      </div>

      <div className="all-jobs__toolbar">
        <div className="all-jobs__search-wrapper">
          <input type="text" placeholder='Search company or position...' value={searchValue} onChange={handleInputChange} />
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
