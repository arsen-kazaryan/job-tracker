import { useNavigate } from 'react-router-dom'
import AddButton from '../../Button/AddButton'
import './HeaderSection.css'
import { useState } from 'react'

const HeaderSection = () => {
  const [text, setText] = useState('') // стейт чтобы локально сохранить инпут
  const navigate = useNavigate() // функция для перехода  

  const handleSumbit =(e)=> {
    e.preventDefault()
    if(!text.trim()) return 
    navigate(`/alljobs?search=${text.trim()}`) 
  }

  return (
    <section className='header-section'>
      <div className="header-section__title-container">
        <h2 className='header-section__title'>Overview</h2>
        <p className='header-section__desc'>Track your progress and stay consistent.</p>
      </div>
      <div className="header-section__search-container">
        <form onSubmit={handleSumbit} className='header-section__search-form'>
          <input type="text" placeholder='Search jobs...' value={text} onChange={(e)=> setText(e.target.value)} />
          <button type='submit' className='header-section__btn-search'>Search</button>
        </form>
        <AddButton />
      </div>
    </section>
  )
}

export default HeaderSection
