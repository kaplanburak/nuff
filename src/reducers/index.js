import { combineReducers } from 'redux';

const userReducer = (state = [], action) => {
    return state;
};

export default combineReducers({
    userData: userReducer
});