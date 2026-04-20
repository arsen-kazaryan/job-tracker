import './JobsListContainer.css'

const JobsListContainer = () => {
  return (
    <section className='jobs-list-container'>
      <div className="jobs-list-container__header">
        <h4>Recent</h4>
        <a href="/">View All</a>
      </div>

      <div className="jobs-list-container__list">
        <div className="jobs-list-container__job-item">
          <div className="jobs-list-container__company">
            <div className="jobs-list-container__img-wrapper">
              <img src="/images/emap-logo.png" alt="EPAM logo" />
            </div>
            <div className="jobs-list-container__job-info">
              <h5>EPAM Systems</h5>
              <p>Frontend Intern</p>
            </div>
          </div>
          <div className="jobs-list-container__job-date">
            18 Apr
          </div>
          <span className="jobs-list-container__status jobs-list-container__status--applied">
            Applied
          </span>
        </div>

        <div className="jobs-list-container__job-item">
          <div className="jobs-list-container__company">
            <div className="jobs-list-container__img-wrapper">
              <img src="/images/emap-logo.png" alt="EPAM logo" />
            </div>
            <div className="jobs-list-container__job-info">
              <h5>Siemens</h5>
              <p>QA Intern</p>
            </div>
          </div>
          <div className="jobs-list-container__job-date">
            17 Apr
          </div>
          <span className="jobs-list-container__status jobs-list-container__status--waiting">
            Want to Apply
          </span>
        </div>

        <div className="jobs-list-container__job-item">
          <div className="jobs-list-container__company">
            <div className="jobs-list-container__img-wrapper">
              <img src="/images/emap-logo.png" alt="EPAM logo" />
            </div>
            <div className="jobs-list-container__job-info">
              <h5>Synopsys</h5>
              <p>Software Engineer Intern</p>
            </div>
          </div>
          <div className="jobs-list-container__job-date">
            15 Apr
          </div>
          <span className="jobs-list-container__status jobs-list-container__status--interview">
            Interview
          </span>
        </div>
      </div>
    </section>
  )
}

export default JobsListContainer
