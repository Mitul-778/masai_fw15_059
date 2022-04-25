import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) =>{
    const [isAuth,setisAuth] = useState(true);
    const handleAuth = () =>{
        setisAuth(!isAuth);
    }
    return (<AuthContext.Provider value={{isAuth, handleAuth}}>{children}</AuthContext.Provider>);
}