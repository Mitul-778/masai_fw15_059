import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import {nanoid} from 'nanoid'

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);

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

  return (
    <div>
     
      {todoList.map((e) => (
        <TodoItem handleStatus={handleStatus} todo={e} />
      ))}
       <TodoInput getData={getData} />
    </div>
  );
};
