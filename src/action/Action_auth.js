import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';
import { normalizeResponseErrors } from './Action_utils';
import {API_BASE_URL} from '../config';
import { clearAuthToken, saveAuthToken } from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = (online,userId) => ({
    type: CLEAR_AUTH,
    online,
    userId
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = (currentUser, userId) => ({
    type: AUTH_SUCCESS,
    currentUser,
    userId
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

export const AUTH_WARNING = 'AUTH_WARNING';
export const warningAuth = () => ({
    type: AUTH_WARNING
})


const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user));
    saveAuthToken(authToken);
};

export const login = (username, password) => dispatch => {
    dispatch(authRequest());
    return (
        fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({authToken}) => storeAuthInfo(authToken, dispatch))
            .catch(err => {
                const {code} = err;
                const message = err['message'] =
                    code === 401
                        ? 'Incorrect username or password. Please try again.'
                        : 'Unable to login, please try again.';
                dispatch(authError(err));
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};
//
export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/refresh`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            dispatch(authError(err));
            dispatch(clearAuth());
            clearAuthToken(authToken);
        });
};

export const LogoutUser = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/logout`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        
        .then(res => res.json())
        .then(({authToken}) => clearAuthToken(authToken))
        .then(() => dispatch(clearAuth()))
        .catch(err => {
            dispatch(authError(err));
            dispatch(clearAuth());
            ;
        });
};