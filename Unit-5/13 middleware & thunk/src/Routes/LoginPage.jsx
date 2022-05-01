import React from "react";
import { shallowEqual, useDispatch , useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { Login } from '../components/Login';
import { loginFailure, loginRequest, loginSuccess, loginUser } from "../Redux/auth/action";

export const LoginPage = () =>{
    const dispatch = useDispatch();
    const {isAuth , isLoading , isError , token} = useSelector((state) => state.auth, shallowEqual)
    
    const handleLogin = ({ email, password }) =>{
        // if(email==='admin' && password === 'admin'){
        //     const action = loginSuccess("faketoken");
        //     dispatch(action);
        // }else{
        //     const action = loginFailure("wrong Credentials");
        //     dispatch(action);
        // }
     dispatch( loginUser({ email , password }))
    }

    if(isAuth){
        return <Navigate to="/" />
    }
    if(isLoading){
        return <div>...Loading</div>
    }
    return(
        <div>
            <Login handleLogin={handleLogin} />
            { isError && <div> something went wrong </div> }
        </div>
    )
}