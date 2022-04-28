import  { createContext, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
const [login,setlogin] = useState(false)
const [token,settoken] = useState("");
const data ={
    email: "eve.holt@reqres.in",
    password: "cityslicka"
}

const handleLog = ()=>{
    if(!login){
        axios.post("https://reqres.in/api/login",data).then((data)=>settoken(data.data.token)).catch((err)=>console.log(err))
        setlogin(login ? false : true);
    }else{
        setlogin(login ? false : true);
    }
   
}

return <AuthContext.Provider value={{login,handleLog,token}}>{children}</AuthContext.Provider>

}