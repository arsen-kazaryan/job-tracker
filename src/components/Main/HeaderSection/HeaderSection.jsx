import AddButton from '../../Button/AddButton'
import './HeaderSection.css'

const HeaderSection = () => {
  return (
    <section className='header-section'>
      <div className="header-section__title-container">
        <h2 className='header-section__title'>Overview</h2>
        <p className='header-section__desc'>Track your progress and stay consistent.</p>
      </div>
      <div className="header-section__search-container">
        <input type="text" placeholder='Search jobs...' />
        <AddButton />
      </div>
    </section>
  )
}

export default HeaderSection
