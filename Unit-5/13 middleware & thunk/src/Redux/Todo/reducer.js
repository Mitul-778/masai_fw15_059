import { loadData, saveData } from "../../utils/localStorage";
import { store } from "../store";
import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS , GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS} from "./action";

const init = {
  todos: [],        // loadData("todos") || []
  isLoading: false,
  isError: false,
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_TODO_SUCCESS: {
    //   const updatedTodo = { ...state.todos, payload };
    //   saveData("todos", updatedTodo);
      return {
        ...state,
        isLoading: false,
      };
    }
    case ADD_TODO_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case GET_TODO_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
      case GET_TODO_SUCCESS: {
        // const updatedTodo = { ...state.todos, payload };
        // saveData("todos", updatedTodo);
        return {
          ...state,
          todos: payload,
          isLoading: false,
        };
      }
      case GET_TODO_FAILURE: {
        return {
          ...state,
          isError: true,
        };
      }
    default:
      return state;
  }
};
