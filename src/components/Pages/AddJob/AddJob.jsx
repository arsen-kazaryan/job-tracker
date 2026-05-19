import { Link, useNavigate } from 'react-router-dom'
import './AddJob.css'

const AddJob = () => {
  const navigate = useNavigate() // для кнопки back 
  
  return (
    <section className="add-job-page">
      <div className="add-job-page__header">
        <div className="add-job-page__title-wrapper">
          <h1>Add Job</h1>
          <p>Create a new record for your job application.</p>
        </div>
        <Link onClick={()=> navigate(-1)} className="add-job-page__back-link">Back</Link>
      </div>

      <form className="add-job-page__form" >
        <div className="add-job-page__grid" >
          <section className="add-job-page__panel" >
            <div className="add-job-page__panel-header" >
              <h2>Basic Info</h2>
              <p>Main fields for the vacancy card.</p>
            </div>

            <div className="add-job-page__field" >
              <span>Company Name</span>
              <input type="text" placeholder="Microsoft" />
            </div>

            <div className="add-job-page__field">
              <span>Position</span>
              <input type="text" placeholder="Frontend Intern" />
            </div>

            <div className="add-job-page__row" >
              <div className="add-job-page__field">
                <span>Date Applied</span>
                <input type="date" onChange={(e)=> console.log(e.target.value) }/>
              </div>

              <div className="add-job-page__field">
                <span>Status</span>
                <select defaultValue="new" onChange={(e)=> console.log(e.target.value)}>
                  <option value="new">New</option>
                  <option value="applied">Applied</option>
                  <option value="waiting">Waiting</option>
                  <option value="interview">Interview</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </section>

          <section className="add-job-page__panel" >
            <div className="add-job-page__panel-header">
              <h2>Application Details</h2>
              <p>Helpful extra information for tracking.</p>
            </div>

            <div className="add-job-page__field">
              <span>Job Link</span>
              <input type="url" placeholder="https://company.com/jobs/frontend-intern" />
            </div>

            <div className="add-job-page__row">
              <div className="add-job-page__field">
                <span>Location</span>
                <input type="text" placeholder="Yerevan / Remote" />
              </div>

              <div className="add-job-page__field">
                <span>Salary</span>
                <input type="text" placeholder="$800 - $1200" />
              </div>
            </div>

            <div className="add-job-page__field">
              <span>Contact Person</span>
              <input type="text" placeholder="Recruiter name" />
            </div>
          </section>
        </div>

        <section className="add-job-page__panel">
          <div className="add-job-page__panel-header">
            <h2>Notes</h2>
            <p>Any follow-up plan, reminders, or interview details.</p>
          </div>

          <div className="add-job-page__field">
            <span>Notes</span>
            <textarea
              rows="6"
              placeholder="Write a short note about the vacancy, your follow-up plan, or why you want this role."
            />
          </div>
        </section>

        <div className="add-job-page__footer">

          <div className="add-job-page__actions">
            <Link onClick={()=> navigate(-1)} className="add-job-page__secondary-button">
              Cancel
            </Link>
            <button type="button" className="add-job-page__primary-button">
              Create Job
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default AddJob
