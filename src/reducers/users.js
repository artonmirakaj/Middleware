// list of users
// contain payload of all users we want to show
import { FETCH_USERS } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_USERS:
        // return our existing listing users along with new list of users
            return [ ...state, ...action.payload.data ];
    }

    return state;
}