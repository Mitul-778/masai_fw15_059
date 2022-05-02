import { USER, SORT, GET_TASK, LOGOUT, NEW } from "./actions";

const init = {
  isAuth : false,
  users : [],
  orders : [],
  neworder :[],
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case USER:
      return {...store , isAuth: true, users:payload}
      case SORT :
        return {...store, orders:[...store.orders].sort((a,b)=>{
          a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0 
        })}
        case GET_TASK:
          return {...store , orders:payload}
        case LOGOUT:
          return {...store , isAuth:false}  
        case NEW:
          return {...store ,  neworder:payload}
    default:
      return store;
  }
};


