import { useJobsStore } from '../../Zustand/useJobsStore'
import './JobCard.css'


const JobCard = ({ company, position, date, status, statusType = 'applied', img, id}) => {

  const {deleteJob,changeJobStatus}= useJobsStore()

  return (
    <div className="job-card">
      <div className="job-card__company">
        <div className="job-card__img-wrapper">
          <img src={img} alt={`${company} logo`} />
        </div>
        <div className="job-card__job-info">
          <h5>{company}</h5>
          <p>{position}</p>
        </div>
      </div>
      <div className="job-card__job-date">
        {date}
      </div>
      <span className={`job-card__status job-card__status--${statusType}`} onClick={()=> changeJobStatus(id)}>
        {status}
      </span>
      <button type='button' className='delete-button' onClick={()=> deleteJob(id)}>
        Delete
      </button>
    </div>
  )
}

export default JobCard
