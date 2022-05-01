import { Routes , Route } from 'react-router-dom'
import './App.css'
import { Home } from './Routes/Home';
import { LoginPage } from './Routes/LoginPage'

function App() {

  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/login' element={<LoginPage/>}></Route>
     </Routes>
    </div>
  )
}

export default App
