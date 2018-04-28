const initialState = {
  data: [],
  loading:false,
  error:null
}

export const userReducer = (state = initialState, action) => {
  if(action.type === 'FETCH_USERS_SUCCESS') {
      return Object.assign({}, state, {
          data: action.users
      }) 
           
  }
  return state
}




const initialStateCU = {
  newUser: '',
  loggedInUser: ''

}
export const combineUser = (state = initialStateCU, action) => {
  if(action.type === 'CREATE_NEW_USER_SUCCESS') {
      return Object.assign({}, state, {
          newUser: action.newUser
      })
  }
  return state
}
