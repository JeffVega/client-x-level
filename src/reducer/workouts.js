import{
  CREATE_WORKOUT_SUCCESS,
  CREATE_WORKOUT_REQUEST,
  CREATE_WORKOUT_ERROR,
  GET_WORKOUT_REQUEST,
  GET_WORKOUT_SUCCESS,
  GET_WORKOUT_ERROR,
  GET_WORKOUTS_REQUEST,
  GET_WORKOUTS_SUCCESS,
  GET_WORKOUTS_ERROR,
  UPDATE_WORKOUT_REQUEST,
  UPDATE_WORKOUT_SUCCESS,
  UPDATE_WORKOUT_ERROR
  } from '../action/workout';
  
  
  const initialState = {
      workouts: [],
      currentWorkout: null,
      loading: false,
      error: null
  }
  
  export const workoutReducer = (state = initialState, action) => {
      if(action.type === CREATE_WORKOUT_SUCCESS) {
          return Object.assign({}, state, {
              workouts: [...state.workouts, action.newWorkout]
          })
      }
      else if(action.type === CREATE_WORKOUT_REQUEST) {
          return Object.assign({}, state, {
              loading: true 
          })
      }
      else if(action.type === CREATE_WORKOUT_ERROR) {
          return Object.assign({}, state,{
              loading: false,
              error: action.error
          })
      }
      else if(action.type === GET_WORKOUT_REQUEST) {
          return Object.assign({}, state, {
              loading: true
          })
      }
      else if(action.type === GET_WORKOUT_SUCCESS){
          return Object.assign({}, state,{
              currentWorkout: action.workouts,
              loading: false
         }) 
      }   
      else if(action.type === GET_WORKOUT_ERROR){
          return Object.assign({}, state,{
              loading: false,
              error: action.error
          })
      }    
      else if(action.type === GET_WORKOUTS_REQUEST) {
          return Object.assign({}, state, {
              loading: true
          })
      }
      else if(action.type === GET_WORKOUTS_SUCCESS){
          return Object.assign({}, state,{
              workouts: action.workouts,
              loading: false
         }) 
      }   
      else if(action.type === GET_WORKOUTS_ERROR){
          return Object.assign({}, state,{
              loading: false,
              error: action.error
          })
      }   
      else if(action.type === UPDATE_WORKOUT_REQUEST) {
          return Object.assign({}, state, {
              loading: true
          })
      }
      else if(action.type === UPDATE_WORKOUT_SUCCESS){
          return Object.assign({}, state,{
            workouts: action.workouts,
              loading: false
         }) 
      }   
      else if(action.type === UPDATE_WORKOUT_ERROR){
          return Object.assign({}, state,{
              loading: false,
              error: action.error
          })
      }
      else{   
      return state
      }
  }