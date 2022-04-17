import { useRef, useState } from "react"

export const TodoInput = ({getData})=>{
    const [text,setText] = useState("");
    return (
        <div className="inputs">
            <input onChange={(e)=>{setText(e.target.value)}} type="text" placeholder="Enter Todo" id="abc" className="inputbox"/>
            <button onClick={()=>{getData(text)}}  id='btn'>+</button>
        </div>
    )
}