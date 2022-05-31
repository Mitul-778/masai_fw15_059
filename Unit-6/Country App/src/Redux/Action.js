import { exactProp } from '@mui/utils';
import  axios from 'axios'
export const ADD_CITY = 'ADD_CITY';
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const LOADING = 'LOADING'
export const ERROR = 'ERROR' 
export const DELETE = 'DELETE'
export const SORT_ASC = 'SORT_ASC'
export const SORT_DSC = 'SORT_DSC'
const PORT = 8080

export const addCity = (payload) =>{
    return{
        type: ADD_CITY,
        payload
    }
}

export const addCountry =(payload) =>{
    return{
        type : ADD_COUNTRY,
        payload
    }
}

export const isLoading = (payload) =>{
    return{
        type:LOADING,
        payload
    }
}

export const isError =() =>{
    return{
        type: ERROR
    }
}

export const getCity = () =>(dispatch) =>{
  dispatch(isLoading(true))  
axios.get(`http://localhost:${PORT}/city`).then((data)=>{
    dispatch(addCity(data.data))
    dispatch(isLoading(false))
}).catch((err)=>{
    dispatch(isError(true))
})
}

export const postCity = (data) =>(dispatch)=>{
    dispatch(isLoading(true))
    axios.post(`http://localhost:${PORT}/city`,data).then((res)=>{
        dispatch(addCity(res.data))
        dispatch(isLoading(false))
    })
}

export const patchCity = (data,id) => (dispatch) =>{
    dispatch(isLoading(true))
    axios.patch(`http://localhost:${PORT}/city/${id}`,data).then((res)=>{
        dispatch(isLoading(false))
    })
}

export const getCountry = () =>(dispatch) =>{
    axios.get(`http://localhost:${PORT}/country`).then((data)=>{
        dispatch(addCountry(data.data))
    }).catch((err)=>{
        dispatch(isError(true))
    })
}

export const postCountry = (data) =>(dispatch)=>{
    dispatch(isLoading(true))
axios.post(`http://localhost:${PORT}/country`,{country:data}).then((res)=>{
    dispatch(isLoading(false))
    dispatch(addCountry(res.data))    
})
}

export const Delete = (data) =>(dispatch) =>{
    axios.delete(`http://localhost:${PORT}/city/${data}`).then((res)=>{
    })
}

export const sortbyasc = () =>{
return{
    type : SORT_ASC
}
}

export const sortbydsc = () =>{
    return{
        type : SORT_DSC
    }
    }