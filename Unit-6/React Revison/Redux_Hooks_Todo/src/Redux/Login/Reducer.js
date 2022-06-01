import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER } from "./Action";

const init = {
    error : false,
    loading : false,
    isAuth : false,
    token : '',
    username : '',
    userDetails:[]
}

export const authReducer = (store=init, {type,payload}) =>{
    switch(type){
        case LOGIN_REQUEST :
            return {...store , loading:true};
        case LOGIN_SUCCESS :
            return {...store,
            error : false,
            loading: false,
            isAuth : true,
            token: payload.res.token,
            username : payload.username,
            };
        case LOGIN_FAILURE :
            return {...store, error : true,isAuth:false}
        case LOGOUT : 
            return {...store,
            error: false,
            loading:false,
            isAuth:false,
            token:'',
            username:''
            }
        case USER :
            return {...store, userDetails:payload}
        default :
            return store
    }
}