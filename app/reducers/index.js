import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const initialUserState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case types.FETCH_USERS_START: {
            return {...state, fetching: true};
        }

        case types.FETCH_USERS_ERROR: {
            return {...state, fetching: false, error: action.data};
        }

        case types.FETCH_USERS_SUCCESS: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.data
            };
        }

        default: {
            return state;
        }
    }
};


const rootReducer = combineReducers({
    users: userReducer,
    routing
});

export default rootReducer;
