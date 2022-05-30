import { ADD_CITY, ADD_COUNTRY, LOADING, ERROR } from "./Action";

const init  = {
    city:[],
    country : [],
    isLoading : false
}

export const reducer = (store=init, {type,payload})=>{
    switch(type){
        case ADD_CITY :
            return { ...store, city:payload }
        case ADD_COUNTRY :
            return { ...store, country:payload }
        case LOADING : 
            return { ...store , isLoading:payload }
        default :
            return store
    }
}