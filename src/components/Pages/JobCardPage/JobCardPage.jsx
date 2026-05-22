import { useNavigate, useParams } from 'react-router-dom';
import './JobCardPage.css'
import { useJobsStore } from '../../Zustand/useJobsStore';

const JobCardPage = () => {
  const { id } = useParams(); // возвращает строку 
  const navigate = useNavigate();
  
  const job = useJobsStore(state => state.jobs.find(e => e.id === Number(id))); 
  //  сразу из всех jobs ищем нам пододящий через метод find чтобы он нам возвращал объект вместо массива 
  if(!job) return <h1>Job not defined...</h1>
  const {company ,position ,date ,status ,statusType ,img ,link ,location ,salary ,contact ,notes} = job // Деструктурирую для удобства. Все кроме id чтобы не конфликтовал с id useParams 
  
  const firstChar = company ? company.charAt(0).toUpperCase() : '?'
  return (
    <div className='job-card-page'>
      <h1 className="job-card-page__title">Job Card Page</h1>
      <h2 style={{marginTop: '50px'}}>TestPage ID: {id} </h2>

        <div className="content">
        <p className="job-card__company">{company}</p>
        <p>{position}</p>
        <p>{date}</p>   {/* На первы 5 я не ставлю проверку поскольку она уже находится на этапе создания вакансии и без них вакансия просто не создастся */}
        <p>{status}</p>
        <p>{statusType}</p>

        {img ? <img src={img} alt="logo"  style={{width: '100px'}}/> : <p className='job-card__first-char'>{firstChar}</p>}
        {link && <p>{link}</p>}
        {location && <p>{location}</p>}
        {salary && <p>{salary}</p>}
        {contact && <p>{contact}</p>}
        {notes && <p>{notes}</p>}

      </div> 
      <button onClick={() => navigate(-1)}>Back</button>

    </div>
  )
}
// Следующим шагом сделать UI
export default JobCardPage