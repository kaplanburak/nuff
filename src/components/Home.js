import React from 'react';
import { clientID } from '../api/spotify';

class Home extends React.Component {
    loginSpotify = () => {
        const authEndpoint = 'https://accounts.spotify.com/authorize';
        const redirectUri = 'http://localhost:3000/user';
        /* redirect uri will be home page
            on componentDidMount if there is a token
            it will be stored in redux
            and user will be redirected to /user with <Link/> */

        const scopes = [
            'user-top-read'
        ];
        
        window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
    }

    render() {
        return <button onClick={this.loginSpotify}>log in</button>;
    }
};

export default Home;