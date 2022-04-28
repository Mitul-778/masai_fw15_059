import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo} from "../Redux/action";
import axios from "axios";
import { Link } from "react-router-dom";

export const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((store) => store.todos);

  const handleAdd = () => {
    const data = {
      title: text,
      status: false,
    };
    axios.post("http://localhost:8080/todos", data).then(getData);
  };

  const handleDelete = (id) =>{
        dispatch(deleteTodo(id))
  }

  const handleToggle= (id) =>{
      dispatch(toggleTodo(id))
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
   await axios
      .get("http://localhost:8080/todos")
      .then((data) => {
        dispatch(addTodo(data.data));
      });
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add Todo</button>
      <h1>Todos List</h1>
      <div>
      {todo.map((e) => {
        return(
          <div key={e.id}>
              <input type="checkbox" onChange={()=>{handleToggle(e.id)}}/>
            <Link to={`/todo/${e.id}`}>{e.title}</Link>{" "}
            <button onClick={()=>{handleDelete(e.id)}}>Delete</button>
          </div>
        )
      })}
      </div>
    </>
  );
};
