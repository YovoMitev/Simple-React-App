import {SIGN_UP_SUCCESS, SIGN_IN_SUCCESS, LOGOUT, DELETE_USER, EDIT_USER} from "../../actions/user/actionTypes";

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

        case SIGN_IN_SUCCESS:
            return Object.assign({}, state, {
                currentSignInUser: action.user
            });

        case LOGOUT:
            return Object.assign({}, state, {
                currentSignInUser: null
            });

        case DELETE_USER:
            return Object.assign({}, state, {
                users: state.users.filter(user => user.username !== action.username),
                registeredUsername: state.registeredUsername.filter(username => username !== action.username),
            });

        case EDIT_USER:
            return Object.assign({}, state, {
                currentSignInUser: Object.assign(state.currentSignInUser, action.user),
                users: updateUserArray(state.users, action.user, action.index)
            });

        default:
            return state;
    }
}

const updateUserArray = (state, updatedUser, updatedUserIndex) => {
    return state.map((user, index) => {
        console.log(index)
        console.log(updatedUserIndex)
       if(index !== updatedUserIndex) {
            return user;
       }
       console.log("HERE");
       return {
           ...user,
           ...updatedUser
       }
    });
};
