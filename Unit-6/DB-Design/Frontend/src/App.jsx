import './App.css'
import { Home } from './components/Home'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
    <nav style={{'display':"flex",'justifyContent':'center','gap':'100px'}}>
    <Link to={'/'}>Home</Link>
    <Link to={'/user'}>User</Link>
    <Link to={'/product'}>Product</Link>
    <Link to={'/list'}>Listing</Link>
    </nav>
    <div className="App">
      <Home/>
    </div>
    </>
  )
}

export default App
