import { createContext, useState } from "react";

export const NewContext = createContext();
export const NewContextProvider = ({children})=>{
    const [newcount,setnewcount] = useState(0);
    const handleUpdate = (value) =>{
        setnewcount(newcount+value);
    }
    return(
        <NewContext.Provider value={ {newcount , handleUpdate}}>{children}</NewContext.Provider>
    )
}