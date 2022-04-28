import './App.css'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'

function App() {
const {login , handleLog,token} = useContext(AuthContext);
  return (
    <div className="App">
      <button onClick={()=>{handleLog()}}>{login ? "Signout" : "Login"}</button>
      {login ? <h1>Logged In : {token}</h1>: <h1>LoggedOut</h1> }
    </div>
  )
}

export default App
