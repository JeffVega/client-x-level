import {API_BASE_URL} from '../config';
import { loadAuthToken } from '../local-storage';
import {store} from '../store'

export const CALCULATE_REQUEST = 'CALCULATE_REQUEST'
export const calculateUserRequest = (cal) => ({
  type:'CALCULATE_REQUEST',
  newCal:cal
})

export const CALCULATE_SUCCESS = 'CALCULATE_SUCCESS'
export const calculateUserSucess = (calculation) => ({
  type:'CALCULATE_SUCCESS',
  data:calculation
})
export const CALCULATE_ERROR = 'CALCULATE_ERROR'
export const calculateUserError = (error) => ({
  type:'CALCULATE_ERROR',
  error
})

export const newCal = body => (dispatch) =>{
  console.log("this is one of our loadToken",loadAuthToken())
    const authToken = loadAuthToken();
    console.log("this is our state",body)
    console.log("Bearer Token here",authToken)
    console.log("weight HERE:",body.weight)
   fetch(`${API_BASE_URL}/cal`, {
    method: 'POST',
    body:JSON.stringify(body),
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
// const calculations = response.calculations.map((calculation)=>{
//   return {
//     calories:calculation.calories
//   }
// })