

import { SET_AUTH_TOKEN, CLEAR_AUTH, AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR} 
from '../action/Action_auth'



const initialState = {
  authToken: null, 
  currentUser: null,
  online:null,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_AUTH_TOKEN) {
      return Object.assign({}, state, {
          authToken: action.authToken
      });
  } else if (action.type === CLEAR_AUTH) {
      return Object.assign({}, state, {
          authToken: null,
          currentUser: null,
          online:false
      });
  } else if (action.type === AUTH_REQUEST) {
      return Object.assign({}, state, {
          loading: true,
          error: null
      });
  } else if (action.type === AUTH_SUCCESS) {
      return Object.assign({}, state, {
          loading: false,
          currentUser: action.currentUser,
          online:action.online
      });
  } else if (action.type === AUTH_ERROR) {
      return Object.assign({}, state, {
          loading: false,
          error: action.error
      });
  }
  return state;
}