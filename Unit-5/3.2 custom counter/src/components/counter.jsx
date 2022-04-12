import React from "react";
import './counter.css'

const Counter = () =>{
    const [count,setCount] = React.useState("");

    const setNumber = (e) =>{
        if(e.key === "Enter"){
            setCount(Number(e.target.value))
            e.target.value=null;
        }
    }

    const handleChange=(val,math)=>{
        if(math==="add-sub"){
            setCount(count+val)
        }else{
            setCount(count*val)
        }
    }

    return(
        <>
        <input onKeyPress={setNumber} type="text" id="num" placeholder="Enter Number..."/>
        <br></br>
        <h1 className={count%2===0 ? "even" : "odd"} >Counter : {count}</h1>
        <button onClick={()=>{handleChange(1,"add-sub")}}>Add +</button>
        <button onClick={()=>{handleChange(-1,"add-sub")}}>Sub -</button>
        <button onClick={()=>{handleChange(2,"mult")}}>Mult *</button>
        </>
    )
}

export {Counter}