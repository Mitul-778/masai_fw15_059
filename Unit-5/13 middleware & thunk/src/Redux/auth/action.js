import axios from 'axios'

export const LOGIN_FAILURE = "LOGIN_FAILURE" 
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_REQUEST = "LOGIN_REQUEST"


export const loginRequest = () =>{
return {
    type : LOGIN_REQUEST,
}
}

export const loginSuccess = (token) =>{
    return {
        type : LOGIN_SUCCESS,
        payload :token
    }
}

export const loginFailure = (err) =>{
    return{
        type : LOGIN_FAILURE,
        payload : err
    }
}

export const loginUser =(payload) => (dispatch) =>{
    dispatch(loginRequest())

    const { email, password } = payload

    axios.post("https://reqres.in/api/login",{
        email,password
    }).then(res => {
        const successAction = loginSuccess(res.data.token)
        dispatch(successAction)
    }).catch(err => {
        const failureAction = loginFailure(err.message);
        dispatch(failureAction)
    })
}