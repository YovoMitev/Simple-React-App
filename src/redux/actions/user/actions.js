import {SIGN_UP_SUCCESS, SIGN_IN_SUCCESS, LOGOUT, DELETE_USER} from "./actionTypes";

export const signUpAction = (user) => {
    return {
        type: SIGN_UP_SUCCESS,
        username: user.username,
        user
    }
};

export const signInAction = (user) => {
    return {
        type: SIGN_IN_SUCCESS,
        user
    }
};

export const logoutAction = () => {
    return {
        type: LOGOUT
    }
};

export const deleteAction = (username) => {
    return {
        type: DELETE_USER,
        username
    }
};
