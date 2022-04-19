import { useState } from "react"
import axios from 'axios'

export const Form = ({getData}) =>{
    const [data,setData]= useState({
        username:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        marital_state:"",
    })
    const handleChange=(e) =>{
        const {id,value}=e.target
        setData({...data,[id]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/data",data)
       getData()
    }

    return(
        <form id="form" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="User Name" id="username" />
        <input onChange={handleChange} type="number" placeholder="Age" id="age" />
        <input onChange={handleChange} type="text" placeholder="Address" id="address" />
        <select id="department">
            <option value="">Select Department</option>
            <option value="arts">Arts</option>
            <option value="science">Science</option>
            <option value="commerce">Commerce</option>
            <option value="acting">Acting</option>
        </select>
        <input onChange={handleChange} type="number" placeholder="Salary" id="salary" />
        <label >Married:<input id="marital_state" type="checkbox" value={"married"} onChange={handleChange}/></label>
        <label >Unmarried:<input id="marital_state" type="checkbox" value={"unmarried"} onChange={handleChange}/></label>
        <input type="submit" value="Submit"/>
        </form>
    )

}