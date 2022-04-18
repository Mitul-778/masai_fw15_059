import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import {nanoid} from 'nanoid'
import {CompletedTodo} from  './CompletedTodo'

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoDone,settodoDone] = useState([]);
  const getData = (todo) => {
    const payload = {
      title: todo,
      status: false,
      id:nanoid(1)
    };
    setTodoList([...todoList, payload]);
    document.getElementById("abc").value=""
  };
  const handleStatus = (id) => {
    setTodoList(
      todoList.map((e) => (e.id === id ? { ...e, status: !e.status } : e))
    );
  };
  const deleteItem = (id) =>{
    setTodoList(todoList.filter((e)=>(e.id!==id)))
    settodoDone(todoDone.filter((e)=>(e.id!==id)))
    
  }
  const completedTodo = (todoList) =>{
    settodoDone(todoList.filter((e)=> (e.status ? {...todoDone,e}:null)))
  }

  return (
    <div>
       <TodoInput getData={getData} />
      {todoList.map((e) => (
        <TodoItem handleStatus={handleStatus} deleteItem={deleteItem} todo={e} />
      ))}
        <CompletedTodo data={todoList} completedTodo={completedTodo}/>
        {todoDone.map((e) => (
        <TodoItem handleStatus={handleStatus} deleteItem={deleteItem} todo={e} />
      ))}
    </div>
  );
};
