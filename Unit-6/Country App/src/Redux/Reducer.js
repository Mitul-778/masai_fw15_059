import { ADD_CITY, ADD_COUNTRY, LOADING, ERROR, SORT_ASC, SORT_DSC } from "./Action";

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
        case SORT_ASC :
            return { ...store , city:[...store.city].sort((a,b)=> Number(a.population)>Number(b.population) ? 1 : Number(a.population)<Number(b.population) ? -1 : 0) }
        case SORT_DSC :
            return { ...store , city:[...store.city].sort((a,b)=> Number(a.population)>Number(b.population) ? -1 : Number(a.population)<Number(b.population) ? 1 : 0) }
        default :
            return store
    }
}