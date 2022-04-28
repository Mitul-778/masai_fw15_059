import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./action";

export const todoReducer = (store, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...store, todos: payload };
    case DELETE_TODO:
      return {
        ...store,
        todos: [
          ...store.todos.filter((e) => {
            return e.id !== payload;
          }),
        ],
      };
    case TOGGLE_TODO: {
       
      return {
        ...store,
        todos: [
          ...store.todos.map((e) => {
            if (e.id === payload) {
              e.status = !e.status;
            }
            return e;
          }),
        ],
      };
    }
     default : 
     return store
  }
};
