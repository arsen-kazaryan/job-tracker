import { useNavigate } from 'react-router-dom'
import './AddJob.css'
import { useRef, useState } from 'react'
import { useJobsStore } from '../../Store/useJobsStore'
import { convertToBase64 } from '../../utils/convertToBase64'



const AddJob = () => {
  const navigate = useNavigate() // для кнопки back 
  const addJob = useJobsStore((state) => state.addJob)
  const [uploadFileCheck, setUploadFileCheck] = useState(false)

  const formRef = useRef(null) // будем работать через неконтролирумые данные 


  const hanldeFileChange = (e)=> {
    const file = e.target.files[0]
    // !!file превращает наличие файла в true, а его отсутствие (undefined) в false
    setUploadFileCheck(!!file);
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formElement = formRef.current
    if (!formElement) return


    const company = formElement.company.value
    const position = formElement.position.value
    const dateApplied = formElement.dateApplied.value    // берем данные напрямую  через name
    const statusType = formElement.status.value
    const status = statusType[0].toUpperCase() + statusType.slice(1)
    const image = formElement.image.files[0]

    let imageBase64 = ''
    if (image) {                                  //для корректного отображения Image
      imageBase64 = await convertToBase64(image)
    }

    const newJob = {
      id: crypto.randomUUID(), // инструмент который выдает  случайную и уникальную строку идентификатор 
      company,
      position,
      date: dateApplied,
      status,
      statusType,

      link: formElement.link.value,
      location: formElement.location.value,
      salary: formElement.salary.value,             // link и ниже могут не быть 
      contact: formElement.contact.value,
      notes: formElement.notes.value,

      img: imageBase64,
    }

    addJob(newJob)

    navigate(-1)
  }

  return (
    <section className="add-job-page">
      <div className="add-job-page__header">
        <div className="add-job-page__title-wrapper">
          <h1>Add Job</h1>
          <p>Create a new record for your job application.</p>
        </div>
        <button onClick={() => {navigate(-1)}} className="add-job-page__back-link">Back</button>
      </div>

      <form className="add-job-page__form" onSubmit={handleSubmit} ref={formRef}>
        <div className="add-job-page__grid" >
          <section className="add-job-page__panel" >
            <div className="add-job-page__panel-header" >
              <h2>Basic Info</h2>
              <p>Main fields for the vacancy card.</p>
            </div>

            <div className="add-job-page__field" >
              <span>Company Name</span>
              <input name="company" type="text" placeholder="Microsoft" required />
            </div>

            <div className="add-job-page__field">
              <span>Position</span>
              <input name='position' type="text" placeholder="Frontend Intern" required />
            </div>

            <div className="add-job-page__row">
              <div className="add-job-page__field">
                <span>Date Applied</span>
                <input type="date" name="dateApplied" required />
              </div>

              <div className="add-job-page__field">
                <span>Status</span>
                <select defaultValue="new" name='status' >
                  <option value="new">New</option>
                  <option value="applied">Applied</option>
                  <option value="waiting">Waiting</option>
                  <option value="interview">Interview</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
              <div className="add-job-page__upload">
                <input type="file"  id='upload-photo' name='image' accept='image/*' style={{display:'none'}} onChange={hanldeFileChange} />
                <label htmlFor="upload-photo" className='upload-photo-label'>Upload Photo: {uploadFileCheck ? 'Selected' : 'Not  Chosen' }</label>
              </div>
          </section>

          <section className="add-job-page__panel" >
            <div className="add-job-page__panel-header">
              <h2>Application Details</h2>
              <p>Helpful extra information for tracking.</p>
            </div>

            <div className="add-job-page__field">
              <span>Job Link</span>
              <input type="url" name='link' placeholder="https://company.com/jobs/frontend-intern" />
            </div>

            <div className="add-job-page__row">
              <div className="add-job-page__field">
                <span>Location</span>
                <input type="text" placeholder="Yerevan / Remote" name='location' />
              </div>

              <div className="add-job-page__field">
                <span>Salary</span>
                <input type="text" placeholder="$800 - $1200" name='salary' />
              </div>
            </div>

            <div className="add-job-page__field">
              <span>Contact Person</span>
              <input type="text" placeholder="Recruiter name" name='contact' />
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
              name='notes'
              rows="6"
              placeholder="Write a short note about the vacancy, your follow-up plan, or why you want this role."
            />
          </div>
        </section>

        <div className="add-job-page__footer">

          <div className="add-job-page__actions">
            <button onClick={() => navigate(-1)} type='button' className="add-job-page__secondary-button">
              Cancel
            </button>
            <button type="submit" className="add-job-page__primary-button">
              Create Job
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default AddJob
