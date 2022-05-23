import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Link } from "react-router-dom";

export const Register = () =>{
    const [ form , setform ] = useState({});
    const navigate = useNavigate()

    const handlechange = (e) =>{
        const { name , value } = e.target;
        setform({ ...form , [name] : value })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("https://masai-api-mocker.herokuapp.com/auth/register",form).then((res)=>console.log(res)).then( navigate("/login") ).catch((err)=>console.log(err))
    }

    return(
        <>
        <h1>Regsiter</h1>
        <div>If user , Login <button> <Link to="/login">Login</Link></button></div>
        <form onSubmit={handleSubmit}>
        <input onChange={handlechange} type="text" name="name" placeholder="Name" />
        <input onChange={handlechange} type="email" name="email" placeholder="Enail" />
        <input onChange={handlechange} type="password" name="password" placeholder="Password" />
        <input onChange={handlechange} type="text" name="username" placeholder="usename" />
        <input onChange={handlechange} type="number" name="mobile" placeholder="Mobile" />
        <textarea onChange={handlechange} name="description"  cols="20" rows="2"></textarea>
        <input type="submit" />
        </form>
        </>
    )
}


/*
  "name": "MASAI School",
  "email": "hello@masai.com"
  "password": "secret",
  "username": "masai-school",
  "mobile": "9876543210",
  "description": "A Transformation in education!"
*/