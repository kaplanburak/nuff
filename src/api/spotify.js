export const loginSpotify = () => {
  const clientID = process.env.REACT_APP_CLIENT_ID;
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const redirectUri = window.location.origin + "/";
  const scopes = ["user-top-read", "user-read-playback-state", "user-modify-playback-state"];

  window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
};
