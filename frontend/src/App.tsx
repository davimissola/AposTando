import './App.css'
import { Home } from './pages/Home'
import { Create } from './pages/Create'
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/auth/create' element={<Create />}/>
    </Routes>
  )
}

export default App
