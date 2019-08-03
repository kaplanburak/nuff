export const getCurrentPlayback = () => (dispatch, getState) => {
  fetch("https://api.spotify.com/v1/me/player", {
    headers: {
      authorization: `Bearer ${getState().accessToken}`
    }
  })
    .then(res => res.json())
    .then(res => {
      const action = {
        type: "GET_CURRENT_PLAYBACK",
        payload: res
      };

      dispatch(action);
    });
};

export const search = term => (dispatch, getState) => {
  const query = term.replace(new RegExp(" ", "g"), "%20");
  const endpoint = `https://api.spotify.com/v1/search?q=${query}&type=album&limit=50`;

  fetch(endpoint, {
    headers: {
      authorization: `Bearer ${getState().accessToken}`
    }
  })
    .then(res => res.json())
    .then(res => {
      const action = {
        type: "SEARCH_RESPONSE",
        payload: res
      };
      console.log(res);
      dispatch(action);
    });
};

export const playAlbum = id => (dispatch, getState) => {
  fetch("https://api.spotify.com/v1/me/player/play", {
    headers: {
      authorization: `Bearer ${getState().accessToken}`
    },
    method: "PUT",
    body: JSON.stringify({
      context_uri: `spotify:album:${id}`
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });
};
