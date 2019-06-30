export const storeToken = token => (dispatch, getState) => {
    const action = {
        type: 'STORE_TOKEN',
        payload: token
    };

    dispatch(action);
};

export const getTopArtists = () => (dispatch, getState) => {
    console.log('getTopArtists() token: ', getState().accessToken);
    fetch("https://api.spotify.com/v1/me/top/artists", {
        headers: {
            'authorization': `Bearer ${getState().accessToken}`
        }
    })
        .then(res => res.json())
        .then(res => {
            const action = {
                type: 'GET_TOP_ARTISTS',
                payload: res.items.map(i => i.name)
            }

            dispatch(action);
        });
};