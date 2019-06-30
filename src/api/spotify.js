const clientID = '755c1bb41140468e9f503736710477bb';

export const loginSpotify = () => {
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const redirectUri = 'http://localhost:3000/';
    const scopes = [
        'user-top-read'
    ];

    window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
};