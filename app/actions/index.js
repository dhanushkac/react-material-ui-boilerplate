import * as types from './types';
import { getUsers } from '../api/userApi';

const fetchUsersPending = () => {
    return {
        type: types.FETCH_USERS_START
    };
};

const fetchUsersSuccess = (users) => {
    return {
        type: types.FETCH_USERS_SUCCESS,
        data: users
    };
};

const fetchUsersError = (error) => {
    return {
        type: types.FETCH_USERS_ERROR,
        data: error
    };
};

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersPending());
        return getUsers().then((res) => {
            dispatch(fetchUsersSuccess(res));
        }).catch((err) => {
            dispatch(fetchUsersError(err));
        });
    };
};
