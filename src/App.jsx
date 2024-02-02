import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './page/login/Login'
import Register from './page/register/Register'
import Home from './page/home/Home'
import Create from './page/create/Create'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
     </Routes>
    </>
  )
}

export default App
