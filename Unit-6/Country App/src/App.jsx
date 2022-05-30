import './App.css'
import { ResponsiveAppBar } from './Components/Navbar/Navbar'
import { AllRoutes } from './Components/Routes/Routes'


function App() {

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <AllRoutes/>
    </div>
  )
}

export default App
