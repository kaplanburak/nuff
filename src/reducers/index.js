import { combineReducers } from 'redux';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TOP_ARTISTS':
            return {
                topArtists: action.payload
            };
        default:
            return state;
    }
};

const authReducer = (state = null, action) => {
    switch (action.type) {
        case 'STORE_TOKEN':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    accessToken: authReducer,
    user: userReducer
});