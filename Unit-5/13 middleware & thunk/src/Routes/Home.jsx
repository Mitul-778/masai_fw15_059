import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'
import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";
import { getTodo } from "../Redux/Todo/action";


export const Home =() =>{
    const isAuth = useSelector((state) => state.auth.isAuth)
    // const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()
    if(!isAuth){
        return <Navigate to="/login" />
    }

    useEffect(()=>{
        dispatch(getTodo())
    },[dispatch])
    return (
        <div>
            {/* <div>{token}</div> */}
            <TodoInput />
            <TodoList />
        </div>
    )
}