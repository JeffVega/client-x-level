import {API_BASE_URL} from '../config';

export const ONLINE_USERS_REQUEST ='ONLINE_USERS_REQUEST'
export const onlineUsersRequest = () =>({
    type:'ONLINE_USERS_REQUEST'

})

export const ONLINE_USERS_SUCESS = 'ONLINE_USERS_SUCESS'
export const onlineUsersSucess = (onlineUsers) => ({
    type:'ONLINE_USERS_SUCESS',
    onlineUsers:onlineUsers
})

export const ONLINE_USERS_ERROR = 'ONLINE_USERS_ERROR'
export const onlineUsersError = (error) => dispatch => ({
    type:'ONLINE_USERS_ERROR',
    error
})

export const getOnlineUsers = () =>(dispatch,getState)=>{
    dispatch(onlineUsersRequest());
    const authToken = localStorage.getItem('authToken');
    fetch(`${API_BASE_URL}/online`,{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(onlineUser =>{
        console.log(onlineUser,'this is our')
        dispatch(onlineUsersSucess(onlineUser))
    })
    .catch( err => {
        console.log(err);
        dispatch(onlineUsersError(err))
    })
}