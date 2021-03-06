import {API_BASE_URL} from '../config';
import { loadAuthToken } from '../local-storage';

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
    const authToken = loadAuthToken();
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