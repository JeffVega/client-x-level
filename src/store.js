import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {calReducer} from './reducer/cal'
import {foodReducer} from './reducer/food'
import {workoutReducer} from './reducer/workouts'
import {combineUser} from './reducer/user';
import authReducer from './reducer/auth';

const store = createStore(combineReducers({
    user: combineUser,
    form: formReducer,
    cal: calReducer,
    food: foodReducer,
    workout: workoutReducer,
    auth: authReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
export default store