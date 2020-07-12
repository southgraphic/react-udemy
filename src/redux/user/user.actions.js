//functions that return objects - each object must be in the format that action is expected to be in

export const setCurrentUser = user => ({

    type: 'SET_CURRENT_USER', //align action creator's type with the reducer's expected type
    payload: user
});