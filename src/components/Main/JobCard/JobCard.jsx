import { useNavigate } from 'react-router-dom'
import { useJobsStore } from '../../Zustand/useJobsStore'
import './JobCard.css'


const JobCard = ({ company, position, date, status, statusType = 'applied', img, id }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    // Для перехода на страницк по ее id 
    navigate(`/job/${id}`);
  };
  const { deleteJob, changeJobStatus } = useJobsStore()
  const firstChar = company ? company.charAt(0).toUpperCase() : '?'
  return (
    <div className="job-card"  onClick={handleCardClick}>
      <div className="job-card__company">
        <div className="job-card__img-wrapper">
          {img ? (
            <img src={img} alt={`${company} logo`} />
          ) : (
            <div className="job-card__fitschar-wrapper">
              <p>{firstChar}</p>
            </div>
          )}
        </div>
        <div className="job-card__job-info">
          <h5>{company}</h5>
          <p>{position}</p>
        </div>
      </div>
      <div className="job-card__job-date">
        {date}
      </div>
      <span className={`job-card__status job-card__status--${statusType}`} onClick={(e) => {e.stopPropagation(); changeJobStatus(id)}}>
        {status}
      </span>
      <button type='button' className='delete-button' onClick={(e) => {e.stopPropagation(); deleteJob(id)}}>
        Delete
      </button>
    </div>
  )
}
// Добавил stopPropagation чтобы избеажть всплытия(лишних переходов на страницу вакансии)

export default JobCard

