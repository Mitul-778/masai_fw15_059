import './App.css'
import {useEffect, useState} from "react"

function App() {
  const [start,setStart] = useState(-1)
  const [end,setEnd] = useState(0);
  useEffect(()=>{
    let id = setInterval(()=>{
      setStart((prev)=>{
        if(prev >= end-1){
          clearInterval(id)
        }
        return Number(prev) + 1;
      })
    },1000)
    return ()=>{
      clearInterval(id)
    }
  },[end])
  return (
    <div className="App">
      <div className='box'>
        <input type="number" placeholder='Start' onChange={(e)=>{setStart(e.target.value)}} />
        <input type="number" placeholder='End' onChange={(e)=>{setEnd(e.target.value)}} />
      </div>
      <h1>Counter : {start}</h1>
    </div>
  )
}

export default App
