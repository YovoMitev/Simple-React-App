import {SIGN_UP_SUCCESS, SIGN_IN_SUCCESS} from "./actionTypes";

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
