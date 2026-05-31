import { useNavigate } from 'react-router-dom'
import './NotFoundPage.css'
const NotFoundPage = ({props}) => {
const navigate = useNavigate()
  return (
    <div className='not-found-page'>
      <h1>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
      <p>{props ? props :  'PAGE NOT FOUND'}</p>
      <button onClick={()=> navigate(-1)} className='not-found-page__back-link'>Back</button>
    </div>
  )
}

export default NotFoundPage