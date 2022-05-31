import { useState } from 'react'
import './App.css'

function App() {
  const[data,setData] = useState({
    item : Array.from({ length: 25 })
  })
  const[load,setLoad] = useState(false)
  const fetch=()=>{
    setTimeout(()=>{
      setData({
        item : data.item.concat(Array.from({ length: 25 }))
      })
      setLoad(false)
    },1000)
  }
  console.log(data)

  const scroll = (e) =>{
    if (e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 50) { 
      setLoad(true)
      fetch()
    }
  }

  return (
    <div className="App">
      <div onScroll={(e)=>scroll(e)} id='container'>
      {data.item.map((e,i)=>(<h1>{`Masai Student-${i+1}`}</h1>))}
      {load ? <h1>Loading...</h1> : null}
      </div>
    </div>
  )
}

export default App
