import { useNavigate } from 'react-router-dom'
import './AddButton.css'

const AddButton = ({ text = '+ Add Job', onClick, className = '' }) => {
  const navigate = useNavigate()

  const handleButtonClick = (e) => {
    // Если передан внешний onClick, выполняем только его
    if (onClick) {
    onClick(e)
      return
    }

    // Дефолтное поведение: переход на страницу добавления вакансии
    e.preventDefault()
    navigate('/addjob')
  }
  
  return (
    <button
      type="button"
      className={`add-button ${className}`.trim()}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  )
}

export default AddButton
