import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Product = () =>{
    const[data,setData] = useState({});
    const[reviews,setReviews] = useState([])
    const { id } = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8080/product/${id}`).then((res)=>setData(res.data.product)).catch((err)=>console.log(err))
        axios.get(`http://localhost:8080/review/${id}`).then((res)=>setReviews(res.data.review)).catch((err)=>console.log(err))
    },[])

    return ()
}