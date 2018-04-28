import {API_BASE_URL} from '../config'

export const CREATE_NEW_USER_REQUEST = 'CREATE_NEW_USER_REQUEST'
export const createNewUser = (user) => ({
    type:'CREATE_NEW_USER',
    newUser: user
})

export const CREATE_NEW_USER_SUCCESS = 'CREATE_NEW_USER_SUCCESS'
export const createNewUserSuccess = () => ({
    type:'CREATE_NEW_USER_SUCCESS',
 
})


export const CREATE_NEW_USER_ERROR= 'CREATE_NEW_USER_ERROR'
export const createNewUserError = (error) => dispatch => ({
    type:'CREATE_NEW_USER_ERROR',
    error

})