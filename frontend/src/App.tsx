import './App.css'
import { Home } from './pages/Home'
import { Create } from './pages/Create'
import { Login } from './pages/Login'
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/auth/create' element={<Create />}/>
      <Route path='/auth/login' element={<Login />} />
    </Routes>
  )
}

export default App
