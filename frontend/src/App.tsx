import './App.css'
import { Home } from './pages/Home'
import { Create } from './pages/Create'
import { Login } from './pages/Login'
import {Routes, Route} from 'react-router-dom'
import { Aposta } from './pages/Aposta'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/auth/create' element={<Create />}/>
      <Route path='/auth/login' element={<Login />} />
      <Route path='/aposta' element={<Aposta />} />
    </Routes>
  )
}

export default App
