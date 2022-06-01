import { GET_TODOS, GET_TODO_ERROR, GET_TODO_REQUEST } from "./Action"

const init = {
    loading : false,
    error : false,
    todos : []
}

export const todoReducer = (store = init,{type,payload})=>{
    switch(type){
        case GET_TODO_REQUEST :
            return { ...store, loading:true }
        case GET_TODOS :
            return { ...store, loading:false,error:false, todos : [...payload] }
        case GET_TODO_ERROR :
            return { ...store, loading:false,error:true,todos:[] }
        default :
            return store
    }
}