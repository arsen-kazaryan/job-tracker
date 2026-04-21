import './JobCard.css'

const JobCard = ({ company, position, date, status, statusType = 'applied', img }) => {
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
      <span className={`job-card__status job-card__status--${statusType}`}>
        {status}
      </span>
    </div>
  )
}

export default JobCard
