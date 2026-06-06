
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'
import AddJob from './Pages/AddJob/AddJob'
import AllJobs from './Pages/AllJobsPage/AllJobs'
import JobCardPage from './Pages/JobCardPage/JobCardPage'
import SettingsPage from './Pages/Settings/Settings'
import NavMenu from './components/NavMenu/NavMenu'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'


function App() {

  return (
    <div className='app'>
      <NavMenu/>
      <Routes >
        <Route index element={<Main/>} />
        <Route path="/alljobs" element={<AllJobs  />} />
        <Route path="/addjob" element={<AddJob />} />
        <Route path="/job/:id" element={<JobCardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
