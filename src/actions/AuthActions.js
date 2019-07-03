export const storeToken = token => (dispatch, getState) => {
    const action = {
        type: 'STORE_TOKEN',
        payload: token
    };

    dispatch(action);
};