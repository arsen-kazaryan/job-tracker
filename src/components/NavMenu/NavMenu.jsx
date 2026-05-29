import { NavLink } from 'react-router-dom'
import './NavMenu.css'
import { useProfileStore } from '../../Store/useProfileStore'
import { getFirstChar } from '../../utils/getFirstChar'

const NavMenu = () => {
  const {name, role,avatar}= useProfileStore()
  const firstChar = getFirstChar(name)
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
          <NavLink
            to='/addjob'
            className={({ isActive }) =>
              isActive
                ? "nav-menu__add-job nav-menu-link active"
                : 'nav-menu__add-job nav-menu-link'}>Add Job</NavLink>
        </div>
        <p className="nav-menu__container-title">TRACKING</p>
        <div className="nav-menu__links-container nav-menu__links-container--tracking">
          <NavLink to="/statistic" 
          className={({ isActive }) =>
              isActive 
                ?"nav-menu__statistics nav-menu-link active"
                : 'nav-menu__statistics nav-menu-link'}>Statistics</NavLink>
          <a href="/" className="nav-menu__calendar nav-menu-link">Calendar</a>
        </div>
        <p className="nav-menu__container-title">ACCOUNT</p>
        <div className="nav-menu__links-container nav-menu__links-container--account">
          <NavLink to="/settings" 
          className={({ isActive }) =>
              isActive 
                ?"nav-menu__settings nav-menu-link active"
                : 'nav-menu__settings nav-menu-link'}>Settings</NavLink>
          <a href="/" className="nav-menu__help nav-menu-link">Help & About</a>
        </div>

        <div className="nav-menu__profile-container">
          <div className="nav-menu__profile-img">
            {avatar
              ? <img  src={avatar} alt="logoProfile" />
              : firstChar
            }
          </div>
          <div className="nav-menu__profile-desc">
            <p className="nav-menu__profile-name">{name}</p>
            <p className="nav-menu__profile-p">{role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavMenu
