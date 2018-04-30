import {API_BASE_URL} from '../config';
import { loadAuthToken } from '../local-storage';
import {store} from '../store'

export const CALCULATE_REQUEST = 'CALCULATE_REQUEST'
export const calculateUserRequest = (cal) => ({
  type:'CALCULATE_REQUEST',
  newCal:cal
})

export const CALCULATE_SUCCESS = 'CALCULATE_SUCCESS'
export const calculateUserSucess = () => ({
  type:'CALCULATE_SUCCESS',
})
export const CALCULATE_ERROR = 'CALCULATE_ERROR'
export const calculateUserError = (error) => ({
  type:'CALCULATE_ERROR',
  error
})

export const newCal = state => (state,dispatch) =>{
  console.log("this is one of our loadToken",loadAuthToken())
    const authToken = loadAuthToken();
    console.log("this is our state",state)
    console.log("Bearer Token here",authToken)
   fetch(`${API_BASE_URL}/cal`, {
    method: 'POST',
    body:JSON.stringify({
      "weight":state.weight,
      "feet":state.feet,
      "inches":state.inches,
      "age":state.age,
      "sex":state.sex,
      "percent":state.percent,
      "level":state.level
    }),
    headers:{
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${authToken}`
    }
})        
    .then(response => response.json())
    .then(calculation => dispatch(calculateUserSucess(calculation)))
    .catch(err => {
        console.log(err)
    })
}
