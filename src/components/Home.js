import React from 'react';
import { Redirect } from 'react-router-dom';
import { clientID } from '../api/spotify';
import { connect } from 'react-redux';
import { storeToken } from '../actions';

class Home extends React.Component {
    componentDidMount() {
        const hash = window.location.hash
            .substring(1)
            .split('&')
            .reduce((obj, str) => {
                const keyVal = str.split('=');
                obj[keyVal[0]] = keyVal[1];
                return obj;
            }, {});

        console.log(hash);

        if (hash.access_token) {
            this.props.storeToken(hash.access_token);
        }
    }

    loginSpotify = () => {
        const authEndpoint = 'https://accounts.spotify.com/authorize';
        const redirectUri = 'http://localhost:3000/';
        const scopes = [
            'user-top-read'
        ];

        window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
    }

    render() {
        if (this.props.token) return <Redirect to="/user" />;
        return <button onClick={this.loginSpotify}>log in</button>;
    }
};

const mapStateToProps = state => {
    return {
        token: state.accessToken
    };
}

const mapDispatchToProps = dispatch => {
    return {
        storeToken: (token) => dispatch(storeToken(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);