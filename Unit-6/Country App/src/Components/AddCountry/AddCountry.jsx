import React from "react";
import { Button, TextField } from "@mui/material"
import { postCountry } from "../../Redux/Action";
import { useDispatch } from 'react-redux'
import { useState } from "react";


export const Country = () =>{
    const[country,setCountry] = useState('')
    const dispatch = useDispatch()

    const handleSubmit=()=>{
        dispatch(postCountry(country))
    }

    return(
        <form style={{margin:'20px'}} action="">
            <TextField onChange={(e)=>setCountry(e.target.value)} placeholder="Add Country..." type='text' size="small"/> <br/>
            <Button onClick={()=>handleSubmit()} style={{height:'40px',marginTop:'20px'}} variant="outlined">Add Country</Button>
        </form>
    )
}