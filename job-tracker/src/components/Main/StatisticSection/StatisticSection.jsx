import './StatisticSection.css'
const StatisticSection = () => {
  return (
    <section className="statistic-section">
      <div className="statistic-section__container">
        <div className="statistic-section__container-title">
          Total Applications
        </div>
        <div className="statistic-section__container-desc">
          <p className='statistic-section__container-num'>12</p>
          <div className='statistic-section__container-img-wrapper bg-green'>
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
          <div className='statistic-section__container-img-wrapper bg-blue'>
            <img className='statistic-section__img' src="/icons/send-icon.svg" alt="send icon" />
          </div> 
        </div>
      </div>
      <div className="statistic-section__container">
        <div className="statistic-section__container-title">
          Interviews
        </div>
        <div className="statistic-section__container-desc">
          <p className='statistic-section__container-num'>2</p>
          <div className='statistic-section__container-img-wrapper bg-darkblue'>
            <img className='statistic-section__img' src="/icons/message-icon.svg" alt="imessage icon" />
          </div> 
        </div>
      </div>
      <div className="statistic-section__container">
        <div className="statistic-section__container-title">
          Offers
        </div>
        <div className="statistic-section__container-desc">
          <p className='statistic-section__container-num'>1</p>
          <div className='statistic-section__container-img-wrapper bg-gold'>
            <img className='statistic-section__img' src="/icons/time-icon.svg" alt="itime-icong" />
          </div> 
        </div>
      </div>
    </section>
  )
}

export default StatisticSection