import './StatisticSection.css'
const StatisticSection = () => {
  return (
    <section className="statistic-section">
      <div className="statistic-section__container">
        <div className="statistic-section__container-title">
          Total
        </div>
        <div className="statistic-section__container-desc">
          <p className='statistic-section__container-num'>12</p>
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
          <p className='statistic-section__container-num'>5</p>
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
          <p className='statistic-section__container-num'>2</p>
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
          <p className='statistic-section__container-num'>3</p>
          <div className='statistic-section__container-img-wrapper statistic-section__icon-wrapper--gold'>
            <img className='statistic-section__img' src="/icons/time-icon.svg" alt="time icon" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatisticSection
