import { createContext, useState } from "react";

export const TerminatedContext = createContext();
export const TerminatedContextProvider = ({children})=>{
    const [tercount,settercount] = useState(0);
    const handleUpdate = (value) =>{
        settercount(tercount+value);
    }
    return(
        <TerminatedContext.Provider value={ {tercount , handleUpdate}}>{children}</TerminatedContext.Provider>
    )
}