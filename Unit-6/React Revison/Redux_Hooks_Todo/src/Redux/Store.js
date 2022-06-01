import { todoReducer } from "./Todo/Reducer";
import { authReducer } from './Login/Reducer';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    todo : todoReducer,
    user : authReducer,
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(()=>{
    console.log('store',store.getState())
})