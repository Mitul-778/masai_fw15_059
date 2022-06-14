import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

export const ProductList = () =>{
    const[data,setData] = useState([])
    const[parent,setParent] = useState([])
    const[name,setName] = useState('')

    useEffect(async()=>{
        axios.get('http://localhost:8080/product').then((res)=>{
            setData(res.data.products);
            setParent(res.data.products[0].categoryId[0].anscester)
            setName(res.data.products[0].categoryId[0].name)
        }).catch((err)=>console.log(err))
    },[])

    return(
        <>
        <div style={{'display':'flex','marginLeft':'20px'}}>
            {parent.map((e)=>(
                <p>/{e.name}</p>
            ))}
            <p>/{name}</p>
        </div>
        <div id="list"> 
        {data.map((e)=>(
            <div key={e._id}>
                <Link to={`/product/${e._id}`}><img id="product" src={e.image} alt="" /></Link>
                <p>{e.name}</p>
                <div id="price_rate">
                    <p>Rs.{e.price}</p>
                    <p>{e.rating} ★</p>
                </div>
            </div>
        ))}
        </div>
        </>
     )
}