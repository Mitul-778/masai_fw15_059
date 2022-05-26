export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginRequest = () =>{
   return{
    type : LOGIN_REQUEST
   }
}

export const loginSuccess = (payload) =>{
   return{
    type : LOGIN_SUCCESS,
    payload
   }
}

export const loginFailure = () =>{
    return{
    type : LOGIN_FAILURE
}
}

export const logout = () =>{
    return{
        type : LOGOUT
    }
}

export const login = ({username,password}) => (dispatch)=>{
dispatch(loginRequest())
fetch('https://masai-api-mocker.herokuapp.com/auth/login',{
    method:'POST',
    body : JSON.stringify({username,password}),
    headers:{
        'Content-Type': 'application/json'
    }
})
.then((res)=>res.json())
.then((res)=> dispatch(loginSuccess({username,token : res.token})))
.catch((err)=> dispatch(loginFailure()))
}