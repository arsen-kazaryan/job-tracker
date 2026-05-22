import { useNavigate, useParams } from 'react-router-dom';
import './JobCardPage.css'

const JobCardPage = () => {
    const { id } = useParams(); 
  const navigate = useNavigate();
  // след этом надо с zustand брать массив работ и по id находить job
  return (
    <div className='job-card-page'>
      <h1 className="job-card-page__title">Job Card Page</h1>
      <h2>ID: {id} </h2>
      <button onClick={()=> navigate(-1)}>Back</button>
    </div>
  )
}

export default JobCardPage