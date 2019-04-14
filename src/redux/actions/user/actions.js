import {SIGN_UP_SUCCESS} from "./actionTypes";

export const signUpAction = (user) => {
    return {
        type: SIGN_UP_SUCCESS,
        username: user.username,
        user
    }
};
