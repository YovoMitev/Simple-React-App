import {SIGN_UP_SUCCESS} from "../../actions/user/actionTypes";

const initialState = {
    users: [],
    registeredUsername: [],
    currentSignInUser: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return Object.assign({}, state, {
                users: [...state.users, action.user],
                registeredUsername: [...state.registeredUsername, action.username]
            });

        default:
            return state;
    }
}
