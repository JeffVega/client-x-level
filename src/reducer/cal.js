import {CALCULATE_REQUEST,
  CALCULATE_SUCCESS,
  CALCULATE_ERROR
}
from '../action/Action_cal'

const initialState = {
  data:[],
  loading:false,
  error:null
}
export const calReducer = (state = initialState, action) => {
  if(action.type === CALCULATE_SUCCESS) {
      return Object.assign({}, state, {
          data:[...state.data,action.data]
          
      })
  }
  else if(action.type === CALCULATE_REQUEST) {
      return Object.assign({}, state, {
          loading: true 
      })
  }
  else if(action.type === CALCULATE_ERROR) {
      return Object.assign({}, state,{
          loading: false,
          error: action.error
      })
  }
  else{
      return state
  }

  }   