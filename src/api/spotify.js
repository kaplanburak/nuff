export const loginSpotify = () => {
  const clientID = process.env.REACT_APP_CLIENT_ID;
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const redirectUri = window.location.origin + "/";
  const scopes = ["user-top-read", "user-read-playback-state", "user-modify-playback-state", "streaming", "user-read-email", "user-read-private"];

  window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
};

export const connectWebPlayer = token => {
  const waitForSpotify = () => {
    return new Promise(resolve => {
      window.onSpotifyWebPlaybackSDKReady = () => {
        resolve();
      };
    });
  };

  waitForSpotify().then(() => {
    const player = new window.Spotify.Player({
      name: "nuff",
      getOAuthToken: cb => {
        cb(token);
      }
    });

    // Error handling
    player.addListener("initialization_error", ({ message }) => {
      console.error(message);
    });
    player.addListener("authentication_error", ({ message }) => {
      console.error(message);
    });
    player.addListener("account_error", ({ message }) => {
      console.error(message);
    });
    player.addListener("playback_error", ({ message }) => {
      console.error(message);
    });

    // Playback status updates
    player.addListener("player_state_changed", state => {
      console.log(state);
    });

    // Ready
    player.addListener("ready", ({ device_id }) => {
      console.log("Ready with Device ID", device_id);
    });

    // Not Ready
    player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
    });

    // Connect to the player!
    player.connect();
  });
};
