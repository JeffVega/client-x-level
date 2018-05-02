import{
  CREATE_FOOD_SUCCESS,
  CREATE_FOOD_REQUEST,
  CREATE_FOOD_ERROR,
  GET_FOOD_REQUEST,
  GET_FOOD_SUCCESS,
  GET_FOOD_ERROR,
  GET_FOODS_REQUEST,
  GET_FOODS_SUCCESS,
  GET_FOODS_ERROR,
  UPDATE_FOOD_REQUEST,
  UPDATE_FOOD_SUCCESS,
  UPDATE_FOOD_ERROR
  } from '../action/Action_food';
  
  
  const initialState = {
      foods: [],
      currentFood: null,
      loading: false,
      error: null
  }
  
  export const foodReducer = (state = initialState, action) => {
      if(action.type === CREATE_FOOD_SUCCESS) {
          return Object.assign({}, state, {
              foods: [...state.foods, action.newFood]
          })
      }
      else if(action.type === CREATE_FOOD_REQUEST) {
          return Object.assign({}, state, {
              loading: true 
          })
      }
      else if(action.type === CREATE_FOOD_ERROR) {
          return Object.assign({}, state,{
              loading: false,
              error: action.error
          })
      }
      else if(action.type === GET_FOOD_REQUEST) {
          return Object.assign({}, state, {
              loading: true
          })
      }
      else if(action.type === GET_FOOD_SUCCESS){
          return Object.assign({}, state,{
              currentFood: action.food,
              loading: false
         }) 
      }   
      else if(action.type === GET_FOOD_ERROR){
          return Object.assign({}, state,{
              loading: false,
              error: action.error
          })
      }    
      else if(action.type === GET_FOODS_REQUEST) {
          return Object.assign({}, state, {
              loading: true
          })
      }
      else if(action.type === GET_FOODS_SUCCESS){
          return Object.assign({}, state,{
              foods: action.foods,
              loading: false
         }) 
      }   
      else if(action.type === GET_FOODS_ERROR){
          return Object.assign({}, state,{
              loading: false,
              error: action.error
          })
      }   
      else if(action.type === UPDATE_FOOD_REQUEST) {
          return Object.assign({}, state, {
              loading: true
          })
      }
      else if(action.type === UPDATE_FOOD_SUCCESS){
          return Object.assign({}, state,{
              foods: action.Foods,
              loading: false
         }) 
      }   
      else if(action.type === UPDATE_FOOD_ERROR){
          return Object.assign({}, state,{
              loading: false,
              error: action.error
          })
      }   
      return state
  
  }