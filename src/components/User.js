import React from 'react';
import { connect } from 'react-redux';
import { getTopArtists } from '../actions';

class User extends React.Component {
    componentDidMount() {
        const { getTopArtists } = this.props;
        getTopArtists();
    }

    render() {
        const { topArtists } = this.props;
        if (topArtists && topArtists.length) {
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

const mapStateToProps = state => {
    return {
        topArtists: state.user.topArtists
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getTopArtists: () => dispatch(getTopArtists())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);