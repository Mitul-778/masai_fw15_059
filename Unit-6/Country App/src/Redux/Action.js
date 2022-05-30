import { exactProp } from '@mui/utils';
import  axios from 'axios'
export const ADD_CITY = 'ADD_CITY';
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const LOADING = 'LOADING'
export const ERROR = 'ERROR' 
export const DELETE = 'DELETE'

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
axios.get('http://localhost:8080/city').then((data)=>{
    dispatch(addCity(data.data))
    dispatch(isLoading(false))
}).catch((err)=>{
    dispatch(isError(true))
})
}

export const postCity = (data) =>(dispatch)=>{
    axios.post('http://localhost:8080/city',data).then((res)=>{
        console.log(res)
        dispatch(addCity(res.data))
    })
}

export const patchCity = (data) => (dispatch) =>{
    axios.patch(`http://localhost:8080/city/${id}`,data).then((res)=>{
        console.log(res)
    })
}

export const getCountry = () =>(dispatch) =>{
    axios.get('http://localhost:8080/country').then((data)=>{
        dispatch(addCountry(data.data))
    }).catch((err)=>{
        dispatch(isError(true))
    })
}

export const postCountry = (data) =>(dispatch)=>{
    dispatch(isLoading(true))
axios.post('http://localhost:8080/country',{country:data}).then((res)=>{
    console.log(res.data);
    dispatch(isLoading(false))
    dispatch(addCountry(res.data))    
})
}

export const Delete = (data) =>(dispatch) =>{
    axios.delete(`http://localhost:8080/city/${data}`).then((res)=>{
        console.log(res)
    })
}