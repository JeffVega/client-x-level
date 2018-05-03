import { API_BASE_URL } from '../config';
import { loadAuthToken } from '../local-storage';


export const CREATE_FOOD_REQUEST = 'CREATE_FOOD_REQUEST'
export const createFoodRequest = (food) => ({
    type:'CREATE_FOOD_REQUEST',
    newFood: food
})

export const CREATE_FOOD_SUCCESS = 'CREATE_FOOD_SUCCESS'
export const createFoodSuccess = (food) => ({
    type:'CREATE_FOOD_SUCCESS',
    newFood: food
})

export const CREATE_FOOD_ERROR = 'CREATE_FOOD_ERROR'
export const createFoodError = (error) => ({
    type:'CREATE_FOOD_ERROR',
    error
})


export const GET_FOOD_REQUEST = 'GET_FOOD_REQUEST'
export const getFoodRequest = () => ({
    type:'GET_FOOD_REQUEST',
})


export const GET_FOOD_SUCCESS = 'GET_FOOD_SUCCESS'
export const getFoodSuccess = (food) => ({
    type:'GET_FOOD_SUCCESS',
    food: food
})


export const GET_FOOD_ERROR= 'GET_FOOD_ERROR'
export const getFoodError = (error) => dispatch => ({
    type:'GET_FOOD_ERROR',
    error

})

export const GET_FOODS_REQUEST = 'GET_FOODS_REQUEST'
export const getFoodsRequest = () => ({
    type:'GET_FOODS_REQUEST',
})


export const GET_FOODS_SUCCESS = 'GET_FOODS_SUCCESS'
export const getFoodsSuccess = (foods) => ({
    type:'GET_FOODS_SUCCESS',
    foods: foods
})


export const GET_FOODS_ERROR= 'GET_FOODS_ERROR'
export const getFoodsError = (error) => dispatch => ({
    type:'GET_FOODS_ERROR',
    error
})

export const UPDATE_FOOD_REQUEST = 'UPDATE_FOOD_REQUEST'
export const updateFoodRequest = (food) => ({
    type:'UPDATE_FOOD_REQUEST',
    newFood: food
})

export const UPDATE_FOOD_SUCCESS = 'UPDATE_FOOD_SUCCESS'
export const updateFoodSuccess = (food) => ({
    type:'UPDATE_FOOD_SUCCESS',
    newFood:food
})

export const UPDATE_FOOD_ERROR = 'UPDATE_FOOD_ERROR'
export const updateFoodError = (error) => ({
    type:'UPDATE_FOOD_ERROR',
    error
})
export const newFoods = user => dispatch => {
  const authToken = loadAuthToken();
  return fetch(`${API_BASE_URL}/food`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${authToken}`
      },
      body: JSON.stringify(user)
  
  })
      .then(res => res.json())
          .then(response=> {
            
          return dispatch(createFoodSuccess(response));
      })
      .catch(err => {
          dispatch(createFoodError(err))
      });
};



export const getFood =(id)=>(dispatch, getState)=>{
  dispatch(getFoodRequest());
  const authToken = localStorage.getItem('authToken');
  fetch(`${API_BASE_URL}/food/${id}`, {
      headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
      }
  })
      .then(res => res.json())
      .then(food=> dispatch(getFoodSuccess(food)))
      .catch(err=> dispatch(getFoodError(err)))
  
}

export const getFoods =() => (dispatch, getState) => {
  dispatch(getFoodsRequest());
  const authToken = localStorage.getItem('authToken');
  fetch(`${API_BASE_URL}/food`, {
      headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
      }
  })
      .then(res => res.json())
      .then(food => {
          
          dispatch(getFoodsSuccess(food))})
      .catch(err=> {
          
          dispatch(getFoodsError(err))
      })
  
}


export const updateFood = user => dispatch => {
  
  const authToken = loadAuthToken();
  return fetch(`${API_BASE_URL}/food/${user.id}`, {
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
          window.location = `/food/${id}`;
          return dispatch(updateFoodRequest(response));
      })
      .catch(err => {
          dispatch(updateFoodError(err))
      });
};