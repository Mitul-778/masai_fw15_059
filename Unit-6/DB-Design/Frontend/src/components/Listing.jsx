import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ProductList = () =>{
    const[data,setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080/product').then((res)=>setData(res.data.products)).catch((err)=>console.log(err))
    },[])

    return(
        <div id="list"> 
        {data.map((e)=>(
            <div>
                <img id="product" src={e.image} alt="" />
                <p>{e.name}</p>
                <div id="price_rate">
                    <p>Rs.{e.price}</p>
                    <p>{e.rating} ★</p>
                </div>
            </div>
        ))}
        </div>
     )
}