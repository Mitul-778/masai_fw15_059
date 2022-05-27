import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./Action";

const init = {
    error : false,
    loading : false,
    isAuth : false,
    token : '',
    username : ''
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
            token: payload.token,
            username : payload.username
            };
        case LOGIN_FAILURE :
            return {...store, error : true}
        case LOGOUT : 
            return {...store,
            error: false,
            loading:false,
            isAuth:false,
            token:'',
            username:''
            }
        default :
            return store
    }
}