import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteTodo, toggleTodo } from "../Redux/action";

export const TodoDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  let todo = useSelector((store) => {
    return store.todos.filter((e) => {
      return e.id.toString() === id;
    });
 });

  console.log("todo", todo, id);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
	 {todo.length !== 1 ? (
        <h1>Todo Deleted</h1>
      ) : (
      <div className="detailCard1">
        <input type="checkbox" onChange={() => handleToggle(todo[0].id)}></input>
        <div>
          <h2>Todo: {todo[0].title}</h2>
          <h2>Status: {todo[0].status ? "Complete" : "Not complete"}</h2>
        </div>
        <button onClick={() => handleDelete(todo[0].id)}>Delete</button>
      </div>
	)}
    </div>
  );
};
