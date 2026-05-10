
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/Main/Main'
import NavMenu from './components/NavMenu/NavMenu'
import AllJobs from './components/Pages/AllJobsPage/AllJobs'
import { useJobsStore } from './components/Zustand/useJobsStore'




function App() {
const jobs = useJobsStore((state)=> state.jobs)



  return (
    <div className='app'>
      <NavMenu />
      <Routes >
        <Route path="/" element={<Main jobs={jobs}  />} />
        <Route path="/alljobs" element={<AllJobs jobs={jobs}  />} />
      </Routes>
    </div>
  )
}

export default App
