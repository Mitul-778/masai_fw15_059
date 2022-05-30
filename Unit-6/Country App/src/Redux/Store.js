import { legacy_createStore as createStore, applyMiddleware , compose} from "redux";
import { reducer } from './Reducer';
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store =  createStore(reducer, enhancer)

store.subscribe(()=>{
    console.log("store", store.getState())
})