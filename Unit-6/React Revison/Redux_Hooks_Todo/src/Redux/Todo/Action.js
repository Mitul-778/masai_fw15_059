export const GET_TODO_REQUEST = "GET_TODO_REQUEST";
export const GET_TODO_ERROR = "GET_TODO_ERROR";
export const GET_TODOS = "GET_TODOS";
export const DELETE = "DELETE";

export const getTodos = (payload) => {
  return {
    type: GET_TODOS,
    payload,
  };
};

export const isLoading = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};

export const error = () => {
  return {
    type: GET_TODO_ERROR,
  };
};

export const getTodosData = () => (dispatch) => {
  dispatch(isLoading());
  fetch("http://localhost:8080/todos")
    .then((res) => res.json())
    .then((res) => dispatch(getTodos(res)))
    .catch((err) => dispatch(error()));
};

export const deleteTodo = (id) => (dispatch) => {
  fetch(`http://localhost:8080/todos/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => dispatch(getTodosData()))
    .catch((err) => dispatch(error()));
};
