import './CalendarContainer.css'

const CalendarContainer = () => {
  return (
    <section className='calendar-container'>
      <h4 className="calendar-container__title">Next Step</h4>

      <div className="calendar-container__card">
        <div className="calendar-container__icon-wrapper">
          <img src="/icons/green-calendar-icon.svg" alt="calendar icon" />
        </div>

        <p className="calendar-container__text">You have 1 interview coming up!</p>

        <div className="calendar-container__job-info">
          <h5>Synopsys</h5>
          <p>Software Engineer Intern</p>
        </div>

        <div className="calendar-container__details">
          <div className="calendar-container__detail">
            <img src="/icons/calendar-icon.svg" alt="date icon" />
            <span>22 Apr 2026</span>
          </div>
          <div className="calendar-container__detail">
            <img src="/icons/time-icon.svg" alt="time icon" />
            <span>14:00</span>
          </div>
        </div>

        <button className="calendar-container__button">Open Calendar</button>
      </div>
    </section>
  )
}

export default CalendarContainer
