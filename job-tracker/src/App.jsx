
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/Main/Main'
import NavMenu from './components/NavMenu/NavMenu'
import AllJobs from './components/Pages/AllJobsPage/AllJobs'

function App() {

  return (
    <div className='app'>
      <NavMenu/>
      <Routes >
        <Route path="/" element={<Main />}/>
        <Route path="/alljobs" element={<AllJobs/>}/>
      </Routes>
    </div>
  )
}

export default App
