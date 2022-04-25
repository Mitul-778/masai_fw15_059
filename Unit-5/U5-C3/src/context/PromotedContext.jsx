import { createContext, useState } from "react";

export const PromotedContext = createContext();
export const PromotedContextProvider = ({children})=>{
    const [procount,setprocount] = useState(0);
    const handleUpdate = (value) =>{
        setprocount(procount+value);
    }
    return(
        <PromotedContext.Provider value={ {procount , handleUpdate}}>{children}</PromotedContext.Provider>
    )
}