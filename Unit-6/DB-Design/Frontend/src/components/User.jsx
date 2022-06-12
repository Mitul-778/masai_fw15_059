import React from "react";
import  { useState } from 'react'
import axios from 'axios'
import { useEffect } from "react";
import { Link } from 'react-router-dom'

export const User = () =>{
    const[data,setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/users').then((res)=>setData(res.data)).catch((err)=>console.log(err))
    },[])
    return(
        <table id="tab">
            <thead>
                <tr>
                    <td>User Name</td>
                    <td>Email</td>
                    <td>Mobile</td>
                    <td>Gender</td>
                </tr>
            </thead>
            <tbody>
                {data.map((e)=>(
                   
                    <tr key={e._id}>
                        <td><Link to={`/user/${e._id}`}>{e.firstName}</Link></td>
                        <td>{e.email}</td>
                        <td>{e.mobile}</td>
                        <td>{e.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}