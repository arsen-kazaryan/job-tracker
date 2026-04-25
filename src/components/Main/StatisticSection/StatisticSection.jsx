import './StatisticSection.css'
const StatisticSection = ({ jobs }) => {
  const total = jobs.length
  const appliedNum = jobs.filter(job=> job.statusType === 'applied').length
  const interviewNum = jobs.filter(job=> job.statusType === 'interview').length
  const rejectedNum = jobs.filter(job=> job.statusType === 'rejected').length
  return (
    <section className="statistic-section">
      <div className="statistic-section__container">
        <div className="statistic-section__container-title">
          Total
        </div>
        <div className="statistic-section__container-desc">
          <p className='statistic-section__container-num'>{total}</p>
          <div className='statistic-section__container-img-wrapper statistic-section__icon-wrapper--green'>
            <img className='statistic-section__img' src="/icons/green-calendar-icon.svg" alt="calendar icon" />
          </div>
        </div>
      </div>
      <div className="statistic-section__container">
        <div className="statistic-section__container-title">
          Applied
        </div>
        <div className="statistic-section__container-desc">
          <p className='statistic-section__container-num'>{appliedNum}</p>
          <div className='statistic-section__container-img-wrapper statistic-section__icon-wrapper--blue'>
            <img className='statistic-section__img' src="/icons/send-icon.svg" alt="send icon" />
          </div>
        </div>
      </div>
      <div className="statistic-section__container">
        <div className="statistic-section__container-title">
          Interview
        </div>
        <div className="statistic-section__container-desc">
          <p className='statistic-section__container-num'>{interviewNum}</p>
          <div className='statistic-section__container-img-wrapper statistic-section__icon-wrapper--darkblue'>
            <img className='statistic-section__img' src="/icons/message-icon.svg" alt="message icon" />
          </div>
        </div>
      </div>
      <div className="statistic-section__container">
        <div className="statistic-section__container-title">
          Rejected
        </div>
        <div className="statistic-section__container-desc">
          <p className='statistic-section__container-num'>{rejectedNum}</p>
          <div className='statistic-section__container-img-wrapper statistic-section__icon-wrapper--gold'>
            <img className='statistic-section__img' src="/icons/time-icon.svg" alt="time icon" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatisticSection
