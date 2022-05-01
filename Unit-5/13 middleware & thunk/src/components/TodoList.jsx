import React from "react";
import { useSelector } from "react-redux";

export const TodoList = () =>{
    const todos = useSelector((state) => state.todo.todos)
    console.log('todos:', todos)

    return (
        <div>
            {todos.map((e)=>{
               return <div key={e.id}>{e.title}</div>
            })}
        </div>
    )
}