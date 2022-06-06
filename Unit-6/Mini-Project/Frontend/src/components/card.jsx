import React from "react";

export const Card = ({data}) =>{
    return(
        <div id="card">
            <img src={data.image} alt="" />
            <h2>{data.name}</h2>
            <span><h3>Rating: {data.rating} ★★★★</h3><h3>Price: ₹ {data.price}</h3></span>
        </div>
    )
}