import './JobCardPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useJobsStore } from '../../Store/useJobsStore';
import { getFirstChar } from '../../utils/getFirstChar';

const JobCardPage = () => {
  const { id } = useParams(); // возвращает строку 
  const navigate = useNavigate();
  
  const changeJobStatus = useJobsStore(state=> state.changeJobStatus)

  const job = useJobsStore(state => state.jobs.find(job => Number(job.id) === Number(id))); 
  //  сразу из всех jobs ищем нам пододящий через метод find чтобы он нам возвращал объект вместо массива 

  if(!job) return <h1>Job not defined...</h1>

  const {
    company,
    position,
    date,
    status,
    statusType,
    img,
    link,
    location,
    salary,
    contact,
    notes,
  } = job // Деструктурирую для удобства. Все кроме id чтобы не конфликтовал с id useParams 
  
  const firstChar = getFirstChar(company)


  const steps = ['New', 'Applied', 'Waiting', 'Interview', 'Offer', 'Rejected']
  const currentIdx = steps.indexOf(status)

  const progressSteps = steps.map((title, index) => ({
    title,
    // Шаг выполнен, если его индекс меньше или равен индексу текущего статуса вакансии
    completed: index <= currentIdx || title === 'New'
  }))

  return (
    <div className='job-card-page'>
      <section className="job-card-page__top" >
        <header className="job-card-page__header" >
          <div className="job-card-page__title-wrapper" >
            <div className="job-card-page__img-wrapper" >
              {img
                ? (<img src={img} alt={`${company} logo`} className='job-card-page__img'/>)
                : (<p className='job-card__first-char'> {firstChar} </p>)
              }
            </div>
            <div className="job-card-page__content" >
              <div className='job-card-page__title-and-status-wrapper'>
                <h1>{position}</h1>
                <button
                  type='button'
                  className={`job-card__status job-card__status--${statusType}`}
                  onClick={() => changeJobStatus(job.id)}>
                  {/* стили оставляю с job-card и импортирую метод смены класса */}
                  {status}
                </button>
              </div>
              <div className="job-card-page__title-info" >
                <p>
                  <img src="/icons/bag-icon.svg" alt="bag" />
                  {company}
                </p>
                {location && (
                  <p>
                    <img src="/icons/location.svg" alt="Location" />
                    {location}
                  </p>
                )}
                {date && (
                  <p>
                    <img src="/icons/calendar-icon.svg" alt="Calendar"/>
                    {date}
                  </p>
                )}
              </div>
            </div>
          </div>
          <button onClick={() => navigate(-1)} className="job-card-page__back-link" > Back </button>
        </header>
      </section >
      <main className="job-card-page__grid" >
        <section className="job-card-page__left-column" >
          <article className="job-card-page__card">
            <h3 className='job-card-page__card-title'>
              Application Progress
            </h3>
            <div className="job-card-page__timeline">
              {progressSteps.map((step, index) => (
                <div key={step.title} className='job-card-page__timeline-item' >
                  <div className="job-card-page__timeline-left">
                    <div
                      className={`
                        job-card-page__timeline-dot
                        ${step.completed
                          ? 'job-card-page__timeline-dot--active'
                          : ''
                        }`}/>
                    {index !== progressSteps.length - 1 && (
                      <div
                        className={`
                          job-card-page__timeline-line
                          ${step.completed
                            ? 'job-card-page__timeline-line--active'
                            : ''
                          }
                        `}/>
                    )}
                  </div>
                  <div className="job-card-page__timeline-content">
                    <h4>{step.title}</h4>
                    <p>
                      {step.completed
                        ? 'Completed'
                        : 'Pending'
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
        <section className="job-card-page__right-column" >
          <article className="job-card-page__card job-card-page__card--medium">
            <h3 className='job-card-page__card-title'>
              Notes
            </h3>
            {notes
              ? (
                <p className='job-card-page__text'>
                  {notes}
                </p>
              )
              : (
                <p className='job-card-page__empty'>
                  No notes yet...
                </p>
              )
            }
          </article>
          <article className="job-card-page__card job-card-page__card--medium" >
            <h3 className='job-card-page__card-title'>
              Job Details
            </h3>
            <div className="job-card-page__details">
                <div className="job-card-page__detail-item">
                  <span>Salary</span>
                  <p>{salary ? salary : 'Not specified'}</p>
                </div>
                <div className="job-card-page__detail-item">
                  <span>Contact</span>
                  <p>{contact ? contact : 'Not specified'}</p>
                </div>
                <div className="job-card-page__detail-item">
                  <span>Link</span>
                  {link 
                  ? (<a href={link} target='_blank' rel='noreferrer'>Open vacancy</a>) 
                  : (<p>Link not specified</p>) }
                </div>
            </div>
          </article>
        </section>
      </main >  
    </div>
  )
}

export default JobCardPage



//В планах на будущее добавить возможность редактировывать вакансии уже после добавления