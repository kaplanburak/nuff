import React from 'react';

class User extends React.Component {
    state = {
        topArtists: []
    };

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

        fetch("https://api.spotify.com/v1/me/top/artists", {
            headers: {
                'authorization': `Bearer ${hash.access_token}`
            }
        }).then(res => res.json()).then(res => {
            console.log(res);
            this.setState({ topArtists: res.items.map(i => i.name) });
        });
    }

    render() {
        const { topArtists } = this.state;
        if (topArtists.length) {
            console.log(topArtists);
            return (
                <div>
                    Your top 20 artists:
                    <ol>
                        {topArtists.map(artist => <li>{artist}</li>)}
                    </ol>
                </div>
            );
        }

        return null;
    }
}

export default User;