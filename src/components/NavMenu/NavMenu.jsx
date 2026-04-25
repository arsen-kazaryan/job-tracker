import { NavLink } from 'react-router-dom'
import './NavMenu.css'

const NavMenu = () => {
  return (
    <section className="nav-menu">
      <div className="nav-menu__section">
        <div className="nav-menu__logo-container">
          <p className="nav-menu__logo-img">{`</>`}</p>
          <h4 className="nav-menu__logo-title">Job Tracker</h4>
          <button className="nav-menu__mobile-button nav-menu__mobile-button--notification" aria-label="Notifications"></button>
        </div>
        <p className="nav-menu__container-title">MAIN</p>
        <div className="nav-menu__links-container nav-menu__links-container--main">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-menu__overview nav-menu-link active"
                : 'nav-menu__overview nav-menu-link'}>Overview</NavLink>
          <NavLink
            to="/alljobs"
            className={({ isActive }) =>
              isActive
                ? "nav-menu__all-jobs nav-menu-link active"
                : 'nav-menu__all-jobs nav-menu-link'}>All Jobs</NavLink>
          <a href="/" className="nav-menu__add-job nav-menu-link">Add Job</a>
        </div>
        <p className="nav-menu__container-title">TRACKING</p>
        <div className="nav-menu__links-container nav-menu__links-container--tracking">
          <a href="/" className="nav-menu__statistics nav-menu-link">Statistics</a>
          <a href="/" className="nav-menu__calendar nav-menu-link">Calendar</a>
        </div>
        <p className="nav-menu__container-title">ACCOUNT</p>
        <div className="nav-menu__links-container nav-menu__links-container--account">
          <a href="/" className="nav-menu__settings nav-menu-link">Settings</a>
          <a href="/" className="nav-menu__help nav-menu-link">Help & About</a>
        </div>

        <div className="nav-menu__profile-container">
          <div className="nav-menu__profile-img">
            <img src='/favicon.svg' alt="logoProfile" />
          </div>
          <div className="nav-menu__profile-desc">
            <p className="nav-menu__profile-name">Aram N.</p>
            <p className="nav-menu__profile-p">Junior Developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavMenu
