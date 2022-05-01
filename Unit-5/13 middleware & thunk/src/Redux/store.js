import { combineReducers , legacy_createStore as createStore, applyMiddleware , compose} from "redux";
import { authReducer } from "./auth/reducer";
import { reducer } from './Todo/reducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    auth : authReducer,
    todo : reducer,
})

/** 
 * @param { redux state} state
 * */ 

// const customMiddleware = store => next => action =>{
//     return typeof action === "function" ? action( store.dispatch ,store.getState) : next(action)
// }


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store =  createStore(rootReducer, enhancer)

store.subscribe(()=>{
    console.log("store", store.getState())
})