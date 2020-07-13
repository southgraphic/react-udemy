//functions that return objects - each object must be in the format that action is expected to be in
import { UserActionTypes} from './user.types';

export const setCurrentUser = user => ({

    type: UserActionTypes.SET_CURRENT_USER, //align action creator's type with the reducer's expected type
    payload: user
});