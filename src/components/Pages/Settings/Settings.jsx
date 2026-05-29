import './Settings.css'
import { useProfileStore } from '../../Zustand/useProfileStore'
import { useJobsStore } from '../../Zustand/useJobsStore'
import { useEffect, useRef, useState } from 'react'

const SettingsPage = () => {
  const { name, role, avatar, updateProfile, resetProfile } = useProfileStore()
  const resetJobs = useJobsStore(state => state.resetJobs)

  // Локальная копия полей, не трогаем стор до нажатия Save
  const [localName, setLocalName] = useState(name)
  const [localRole, setLocalRole] = useState(role)
  const [localAvatar, setLocalAvatar] = useState(avatar)
  const [saved, setSaved] = useState(false)
  const [reset, setReset] = useState(false)

  const saveTimerRef = useRef(null)
  const resetTimerRef = useRef(null)

  //Синхронизация локального стейта
  useEffect(() => {
    setLocalName(name)
    setLocalRole(role)
    setLocalAvatar(avatar)
  }, [name, role,avatar])

  // Очистка памяти 
  useEffect(() => {
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current)
    }
  }, [])

  const handleSave = () => {
    if (localName.trim().length === 0 || localRole.trim().length === 0) return
    updateProfile({ name: localName.trim(), role: localRole.trim(), avatar: localAvatar })
    setSaved(true)

    if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    //saved показывается на секунду
    setTimeout(() => setSaved(false), 1000)

  }

  const handleReset = () => {
    if (window.confirm('Reset all jobs to default?')) {
      resetJobs()
      setReset(true)

      if (resetTimerRef.current) clearTimeout(resetTimerRef.current)
      resetTimerRef.current = setTimeout(() => setReset(false), 1500)
    }
  }

  const handleResetProfile = () => {
    if (window.confirm('Do you want to reset name, role and avatar?')) {
      resetProfile()
    }
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    // FileReader конвертирует файл в base64 строку, можно хранить в localStorage
    reader.onload = () => {
      setLocalAvatar(reader.result)
    }
    reader.readAsDataURL(file)
  }

  // Первая буква имени для аватарки, как в job-card
  const firstChar = localName.trim() ? localName.trim().charAt(0).toUpperCase() : '?'

  // Кнопка заблокирована, если поля пустые ИЛИ если данные в инпутах совпадают с данными в сторе
const isSaveDisabled =
    localName.trim().length === 0 ||
    localRole.trim().length === 0 ||
    (localName.trim() === name && localRole.trim() === role && localAvatar === avatar); 


  return (
    <div className="settings-page" >

      <header className="settings-page__header">
        <h1>Settings</h1>
        <p>Manage your profile and application data.</p>
      </header>

      <article className="settings-page__card">
        <h2 className="settings-page__card-title">Profile</h2>
        <p className="settings-page__card-desc">Your name and role shown in the sidebar.</p>

        <div className="settings-page__profile">
          <label className="settings-page__avatar" htmlFor="avatar-upload">
            {localAvatar
              ? <img src={localAvatar} alt="avatar" />
              : firstChar
            }
            <div className="settings-page__avatar-overlay">
              <span>Edit</span>
            </div>
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />

          <div className="settings-page__fields" >
            <div className="settings-page__field">
              <label className="settings-page__label" htmlFor="name">Name</label>
              <input
                id="name"
                className="settings-page__input"
                type="text"
                value={localName}
                onChange={e => setLocalName(e.target.value)}
                placeholder="Your name..."
              />
            </div>
            <div className="settings-page__field">
              <label className="settings-page__label" htmlFor="role">Role</label>
              <input
                id="role"
                className="settings-page__input"
                type="text"
                value={localRole}
                onChange={e => setLocalRole(e.target.value)}
                placeholder="Junior Developer"
              />
            </div>


          </div>
        </div>

        <div className="settings-page__actions">
          <button onClick={handleResetProfile} type='button' className='settings-page__btn settings-page__btn--danger'>
            Reset Profile
          </button>
          <button
            className="settings-page__btn settings-page__btn--primary"
            onClick={handleSave}
            disabled={isSaveDisabled}>
            {saved ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </article>

      <article className="settings-page__card">
        <h2 className="settings-page__card-title">Data</h2>
        <p className="settings-page__card-desc">Manage your job application records.</p>

        <div className="settings-page__data-row">
          <div className="settings-page__data-info">
            <span className="settings-page__data-label">Reset all jobs</span>
            <span className="settings-page__data-hint">Restores the default list of jobs. Cannot be undone.</span>
          </div>
          <button
            className="settings-page__btn settings-page__btn--danger"
            onClick={handleReset}>
            {reset ? 'Success!' : 'Reset Jobs'}
          </button>
        </div>
      </article>
    </div>
  )
}

export default SettingsPage