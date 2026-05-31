import { useNavigate } from 'react-router-dom'
import { useJobsStore } from '../../../Store/useJobsStore'
import './JobCard.css'
import { getFirstChar } from '../../../utils/getFirstChar'


const JobCard = ({ company, position, date, status, statusType = 'applied', img, id }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    // Для перехода на страницк по ее id 
    navigate(`/job/${id}`);
  };
  const { deleteJob, changeJobStatus } = useJobsStore()
  const firstChar = getFirstChar(company)
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
          <h5>{company ? company : 'Company name'}</h5>
          <p>{position ? position : 'position not defined'}</p>
        </div>
      </div>
      <div className="job-card__job-date">
        {date ? date : 'no date'}
      </div>
      <button type='button' className={`job-card__status job-card__status--${statusType}`} onClick={(e) => {e.stopPropagation(); changeJobStatus(id)}}>
        {status ? status : 'Not specified'}
      </button>
      <button type='button' className='delete-button' onClick={(e) => {e.stopPropagation(); deleteJob(id)}}>
        Delete
      </button>
    </div>
  )
}
// Добавил stopPropagation чтобы избеажть всплытия(лишних переходов на страницу вакансии)

export default JobCard

