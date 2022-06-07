import './App.css'
import { Card } from './components/card'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from "react-router-dom";

function App() {
let [searchParams, setSearchParams] = useSearchParams();
const [data,setData] = useState([])
const [total_page,setTotal_page] = useState(0)
const [page,setPage] = useState(searchParams.get('page') || 1)
const [category,setCategory] = useState(searchParams.get('category') || '')
const [sort,setSort] = useState(searchParams.get('sort') || '')
const [color,setColor] = useState(searchParams.get('color') || '')
const arr = new Array(total_page).fill(0);

useEffect(()=>{
  axios.get(`http://localhost:5000/product?color=${color}&category=${category}&sort=${sort}&page=${page}`).then((res)=>{
    setData(res.data.product)
    setTotal_page(res.data.total_page)
  }).catch((err)=>console.log(err))
  setSearchParams({page,category,sort,color})
},[page,category,sort,color])


  return (
    <>
    <div id='filter'>
      <select name="category" onChange={(e)=>{setCategory(e.target.value);setPage(1)}} >
        <option value="">Category</option>
        <option value="sedan">Sedan</option>
        <option value="hatch_back">Hatch Back</option>
        <option value="suv">SUV</option>
      </select>
      <select name="sort"  onChange={(e)=>{setSort(e.target.value);setPage(1)}}>
        <option value="">Sort by</option>
        <option value="sort_asc">Asc</option>
        <option value="sort_dsc">Desc</option>
      </select>
      <select name="color" onChange={(e)=>{setColor(e.target.value);setPage(1)}}>
        <option value="">Color</option>
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
      { arr.map((e,i)=>(
        <button key={i} onClick={()=>setPage(i+1)}>{i+1}</button>
      )) }
      <button onClick={()=>setPage(page+1)}>NEXT</button>
    </div>
    </>
  )
}

export default App
