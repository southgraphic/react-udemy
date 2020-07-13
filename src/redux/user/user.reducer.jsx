import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
//state = INITIAL_STATE is because ES6 allows a parameter to have a value defined

    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;