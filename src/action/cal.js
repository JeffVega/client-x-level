import {API_BASE_URL} from '../config'


export const CALCULATE_REQUEST = 'CALCULATE_REQUEST'
export const calculateUser = (cal) => ({
  type:'CALCULATE_REQUEST',
  newCal:cal
})

export const CALCULATE_SUCCESS = 'CALCULATE_SUCCESS'
export const calculateUser = () => ({
  type:'CALCULATE_SUCCESS',
})
export const CALCULATE_ERROR = 'CALCULATE_ERROR'
export const calculateUser = (error) => dispatch = ({
  type:'CALCULATE_ERROR',
  error
})

export const newUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/calculator`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
  })
      .then(res => {
          console.log(res);
          return res.json()})
      .then(()=> {
          return dispatch(createNewUserSuccess())
          
      })
      .catch(err => {
          dispatch(createNewUserError(err))
          const {reason, message, location} = err;
          if (reason === 'ValidationError') {
              return Promise.reject(
                  new SubmissionError({
                      [location]: message
                  })
              );
          }
      });
};