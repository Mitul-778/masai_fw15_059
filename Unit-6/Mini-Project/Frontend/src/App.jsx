import './App.css'
import { Card } from './components/card'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from "react-router-dom";

function App() {
let [searchParams, setSearchParams] = useSearchParams();
const [data,setData] = useState([])
const [page,setPage] = useState(searchParams.get('page') || 1)
const [category,setCategory] = useState(searchParams.get('category') || '')
const [sort,setSort] = useState(searchParams.get('sort') || '')
const [color,setColor] = useState(searchParams.get('color') || '')

useEffect(()=>{
  axios.get(`http://localhost:5000/product?color=${color}&category=${category}&sort=${sort}&page=${page}`).then((res)=>setData(res.data.product))
  setSearchParams({page,category,sort,color})
},[page,category,sort,color])


  return (
    <>
    <div id='filter'>
      <select name="category" onChange={(e)=>setCategory(e.target.value)} >
        <option value="">Category</option>
        <option value="sedan">Sedan</option>
        <option value="hatch_back">Hatch Back</option>
        <option value="suv">SUV</option>
      </select>
      <select name="sort"  onChange={(e)=>setSort(e.target.value)}>
        <option value="">Sort by</option>
        <option value="sort_asc">Asc</option>
        <option value="sort_dsc">Desc</option>
      </select>
      <select name="color" onChange={(e)=>setColor(e.target.value)}>
        <option value="white">White</option>
        <option value="black">Black</option>
        <option value="gray">Gray</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </select>
    </div>
    <div className="App">
      {data.map((e)=>(
        <Card key={e._id} data={e}/>
      ))}
    </div>
    <div id="btns">
      <button onClick={()=>setPage(page-1)}>PREV</button>
      <button onClick={()=>setPage(1)}>1</button>
      <button onClick={()=>setPage(2)}>2</button>
      <button onClick={()=>setPage(3)}>3</button>
      <button onClick={()=>setPage(4)}>4</button>
      <button onClick={()=>setPage(5)}>5</button>
      <button onClick={()=>setPage(page+1)}>NEXT</button>
    </div>
    </>
  )
}

export default App
