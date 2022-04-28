import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteTodo, toggleTodo } from "../Redux/action";

export const TodoDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  let todo = useSelector((store) => {
    return store.todos.filter((e) => {
      return e.id === id;
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
      <div className="detailCard1">
        <input type="checkbox" onChange={() => handleToggle(id)}></input>
        <div>
          <h2>Todo: {todo.title}</h2>
          <h2>Status: {todo.status ? "Complete" : "Not complete"}</h2>
        </div>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};
