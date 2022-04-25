import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { handleAuth } = useContext(AuthContext)
    //  use reqres to log user in.
  const data = {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
  }
  const handleSubmit = ()=>{
    // axios.post("https://reqres.in/api/login",data).then((data)=>console.log(data)).catch((err)=>console.log(err))
    handleAuth();
    navigate("/",{replace:false})

  }
    return (
      <form className="loginform">
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
        />
        <input
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
        />
        <input type="submit" value="SIGN IN" className="login_submit" onSubmit={()=>{handleSubmit()}}/>
      </form>
    );
  };