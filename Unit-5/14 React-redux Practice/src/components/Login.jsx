import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () =>{

    const [form , setForm] = useState({})
    const navigate = useNavigate()
    const handleChange =(e) =>{
        const {name , value} = e.target
        setForm({
            ...form , [name] :  value
        })
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post("https://masai-api-mocker.herokuapp.com/auth/login",form).then((res)=>localStorage.setItem("user", JSON.stringify(res.data))).then(navigate("/git")).catch((err)=> navigate("/login"))
    }

    return (
        <>
        <div>Login</div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="username" placeholder=" User Name" />
            <input onChange={handleChange} type="password" name="password" placeholder="Password" />
            <input type="submit" value="Login" />
        </form>
        </>
    )
}