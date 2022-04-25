import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Logout = () => {
  const {handleAuth } = useContext(AuthContext)
    // log user out. it's just an inmemory value in context api
    return <div onClick={()=>{handleAuth()}}> LogOut</div>;
  };