
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/Main/Main'
import NavMenu from './components/NavMenu/NavMenu'
import AllJobs from './components/Pages/AllJobsPage/AllJobs'
import { jobs as defaultJobs } from './components/data/jobCard'
import { useEffect, useState } from 'react'


const STORAGE_KEY = 'job-tracker.jobs' //Имя ячейки loacalStorage в которой будут хранится данные вакансии 

function getStoredJobs() {
  try {  // try catch нужен для случая если JSON данные придут побитые
    const savedJobs = localStorage.getItem(STORAGE_KEY) // Пытаемся достать сохраненные данные из браузера
    return savedJobs ? JSON.parse(savedJobs) : defaultJobs //если сохраненные данные есть, берем их(по крайней мере пытаемся взять данные с локального хранилища превращая JSON в массив). Если нет берем данные и стартового массива
  } catch {
    return defaultJobs
  }
}

function App() {
  const [jobs] = useState(getStoredJobs) // Здесь передается сама функция а не результат его вызова. React вызвет его при первом рендере и возмет его резльат как начальное значение

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs))
  }, [jobs])
  {/* 
    useEffect=> этот эффект меняется каждый раз, когда меняется jobs, и сохраняет свежий список в LocalStorage
    Логика: 
    1. Открыл сайт впервые 
    2. в LocalStorage пусто
    3. берется deafaulJobs из файла.
    4. реакт кладет их в state
    5. useEffect - сохраняет в localStorage
  */}


  return (
    <div className='app'>
      <NavMenu />
      <Routes >
        <Route path="/" element={<Main jobs={jobs} />} />
        <Route path="/alljobs" element={<AllJobs jobs={jobs} />} />
      </Routes>
    </div>
  )
}

export default App
