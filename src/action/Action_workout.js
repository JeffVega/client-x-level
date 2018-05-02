import { API_BASE_URL } from '../config';
import { loadAuthToken } from '../local-storage';


export const CREATE_WORKOUT_REQUEST = 'CREATE_WORKOUT_REQUEST'
export const createWorkoutRequest = (workout) => ({
    type:'CREATE_WORKOUT_REQUEST',
    newWorkout:workout
})

export const CREATE_WORKOUT_SUCCESS = 'CREATE_WORKOUT_SUCCESS'
export const createWorkoutSuccess = (workout) => ({
    type:'CREATE_WORKOUT_SUCCESS',
    newWorkout: workout
})

export const CREATE_WORKOUT_ERROR = 'CREATE_WORKOUT_ERROR'
export const createWorkoutError = (error) => ({
    type:'CREATE_WORKOUT_ERROR',
    error
})


export const GET_WORKOUT_REQUEST = 'GET_WORKOUT_REQUEST'
export const getWorkoutRequest = () => ({
    type:'GET_WORKOUT_REQUEST',
})


export const GET_WORKOUT_SUCCESS = 'GET_WORKOUT_SUCCESS'
export const getWorkoutSuccess = (workout) => ({
    type:'GET_WORKOUT_SUCCESS',
    workouts: workout
})


export const GET_WORKOUT_ERROR= 'GET_WORKOUT_ERROR'
export const getWorkoutError = (error) => dispatch => ({
    type:'GET_WORKOUT_ERROR',
    error

})

export const GET_WORKOUTS_REQUEST = 'GET_WORKOUTS_REQUEST'
export const getWorkoutsRequest = () => ({
    type:'GET_WORKOUTS_REQUEST',
})


export const GET_WORKOUTS_SUCCESS = 'GET_WORKOUTS_SUCCESS'
export const getWorkoutsSuccess = (workouts) => ({
    type:'GET_WORKOUTS_SUCCESS',
    workouts: workouts
})


export const GET_WORKOUTS_ERROR= 'GET_WORKOUTS_ERROR'
export const getWorkoutsError = (error) => dispatch => ({
    type:'GET_WORKOUTS_ERROR',
    error
})

export const UPDATE_WORKOUT_REQUEST = 'UPDATE_WORKOUT_REQUEST'
export const updateWorkoutRequest = (workout) => ({
    type:'UPDATE_WORKOUT_REQUEST',
    newWorkout: workout
})

export const UPDATE_WORKOUT_SUCCESS = 'UPDATE_WORKOUT_SUCCESS'
export const updateWorkoutSuccess = (workout) => ({
    type:'UPDATE_WORKOUT_SUCCESS',
    newWorkout:workout
})

export const UPDATE_WORKOUT_ERROR = 'UPDATE_WORKOUT_ERROR'
export const updateWorkoutError = (error) => ({
    type:'UPDATE_WORKOUT_ERROR',
    error
})
export const newWorkout = works => dispatch => {
  const authToken = loadAuthToken();
  return fetch(`${API_BASE_URL}/workout`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${authToken}`
      },
      body: JSON.stringify(works)
  
  })
      .then(res => res.json())
          .then(response=> {
              console.log("this is our res ",response)
          return dispatch(createWorkoutSuccess(response));
      })
      .catch(err => {
          dispatch(createWorkoutError(err))
      });
};



export const getWorkout =(id)=>(dispatch, getState)=>{
  dispatch(getWorkoutRequest());
  const authToken = localStorage.getItem('authToken');
  fetch(`${API_BASE_URL}/workout/${id}`, {
      headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
      }
  })
      .then(res => res.json())
      .then(WORKOUT=> dispatch(getWorkoutSuccess(WORKOUT)))
      .catch(err=> dispatch(getWorkoutError(err)))
  
}

export const getWorkouts =() => (dispatch, getState) => {
  dispatch(getWorkoutsRequest());
  const authToken = localStorage.getItem('authToken');
  fetch(`${API_BASE_URL}/workout`, {
      headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
      }
  })
      .then(res => res.json())
      .then(WORKOUT => {
          console.log(WORKOUT);
          dispatch(getWorkoutsSuccess(WORKOUT))})
      .catch(err=> {
          console.log(err);
          dispatch(getWorkoutsError(err))
      })
  
}


export const updateWorkout = user => dispatch => {
  console.log(user);
  const authToken = loadAuthToken();
  return fetch(`${API_BASE_URL}/workout/${user.id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${authToken}`
      },
      body: JSON.stringify(user)
  
  })
      .then(res => res.json())
          .then(response=> {
          const id = response.id;
          window.location = `/workout/${id}`;
          return dispatch(updateWorkoutRequest(response));
      })
      .catch(err => {
          dispatch(updateWorkoutError(err))
      });
};