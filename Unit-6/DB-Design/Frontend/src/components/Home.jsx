import React from "react";
import { Routes, Route } from 'react-router-dom'
import { User } from "./User";
import { UserDetails } from './UserDetails'

export const Home=()=>{
    return ( 
    <Routes>
        <Route path="/user" element={<User/>}>User</Route>
        <Route path="/user/:id" element={<UserDetails/>}>User Details</Route>
    </Routes>
     )
}