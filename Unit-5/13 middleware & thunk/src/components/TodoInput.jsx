import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Todo/action";

export const TodoInput = () =>{
    const [title, settitle] =useState("");
    const dispatch = useDispatch();

    const handleAdd = () =>{
        const addTodoAction = addTodo(title);
        dispatch(addTodoAction); 
    }

    return(
        <div>
            <h3>Add Todo</h3>
            <input type="text" placeholder="Add Todo" onChange={(e)=> settitle(e.target.value)} />
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}