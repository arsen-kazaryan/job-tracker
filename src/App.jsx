
import './App.css'
import Main from './components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import NavMenu from './components/NavMenu/NavMenu'
import AllJobs from './components/Pages/AllJobsPage/AllJobs'
import { useJobsStore } from './components/Zustand/useJobsStore'
import AddJob from './components/Pages/AddJob/AddJob.jsx'
import JobCardPage from './components/Pages/JobCardPage/JobCardPage.jsx'
import StatisticsPage from './components/Pages/StatisticsPage/StatisticsPage.jsx'


function App() {
const jobs = useJobsStore((state)=> state.jobs)



  return (
    <div className='app'>
      <NavMenu />
      <Routes >
        <Route index element={<Main jobs={jobs}  />} />
        <Route path="/alljobs" element={<AllJobs jobs={jobs}  />} />
        <Route path="/addjob" element={<AddJob />} />
        <Route path="/job/:id" element={<JobCardPage />} />
        <Route path="/statistic" element={<StatisticsPage />} />
      </Routes>
    </div>
  )
}

export default App
