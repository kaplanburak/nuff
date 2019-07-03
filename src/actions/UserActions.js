export const getTopArtists = () => (dispatch, getState) => {
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
