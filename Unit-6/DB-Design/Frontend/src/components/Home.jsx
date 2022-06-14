import React from "react";
import { Routes, Route } from 'react-router-dom'
import { User } from "./User";
import { UserDetails } from './UserDetails'
import { ProductList } from './Listing'
import { Product } from "./Product";

export const Home=()=>{
    return ( 
    <Routes>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/user/:id" element={<UserDetails/>}></Route>
        <Route path="/list" element={ <ProductList/> }></Route>
        <Route path="/product/:id" element={ <Product/> }></Route>
    </Routes>
     )
}