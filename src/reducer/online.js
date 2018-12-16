import { 
    ONLINE_USERS_REQUEST, 
    ONLINE_USERS_SUCESS,
    ONLINE_USERS_ERROR, 
     } from '../action/Action_online';


     const initialState = {
         onlineUsers:[],
         loading:false,
         error:null
     }

     export const onlineUsersReducer = (state = initialState, action) => {
         if(action.type === ONLINE_USERS_SUCESS){
             return Object.assign({}, state,{
                 onlineUsers:action.onlineUsers
             })
         }
         else if (action.type === ONLINE_USERS_REQUEST){
             return Object.assign({},state,{
                 loading:true
             })

         }
         else if(action.type === ONLINE_USERS_ERROR){
             return Object.assign({}, state,{
                 loading:false,
                 error:action.error
             })
         }
         else{
             return state
         }
     }