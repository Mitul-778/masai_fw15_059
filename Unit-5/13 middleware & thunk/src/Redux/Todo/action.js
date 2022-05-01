import axios from "axios";

export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";
export const GET_TODO_REQUEST = "GET_TODO_REQUEST";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAILURE = "GET_TODO_FAILURE";

export const addTodoSuccess = (payload) =>{
    return {
        type: ADD_TODO_SUCCESS,
        payload
    }
}

export const addTodoFailure = (error) =>{
    return {
        type: ADD_TODO_FAILURE,
        payload : error
    }
}

export const addTodoRequest = () =>{
    return {
        type: ADD_TODO_REQUEST,
    }
}

export const addTodo = (payload) => dispatch =>{
dispatch(addTodoRequest())
return axios.post("http://localhost:8080/todos",{
    title:payload,
    status:false
}).then(res => {
    dispatch(addTodoSuccess(res.data))
    dispatch(getTodo())
}).catch(err =>{
    dispatch(addTodoFailure(err))
})
}

export const getTodoSuccess = (payload) =>{
    return {
        type: GET_TODO_SUCCESS,
        payload
    }
}

export const getTodoFailure = (error) =>{
    return {
        type: GET_TODO_FAILURE,
        payload : error
    }
}

export const getTodoRequest = () =>{
    return {
        type: GET_TODO_REQUEST,
    }
}

export const getTodo = () => dispatch =>{
dispatch(getTodoRequest())
return axios.get("http://localhost:8080/todos")
.then(res => {
    dispatch(getTodoSuccess(res.data))
}).catch(err =>{
    dispatch(getTodoFailure(err))
})
}