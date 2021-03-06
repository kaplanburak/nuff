import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { storeToken } from "../actions";
import { loginSpotify, connectWebPlayer } from "../api/spotify";

class Home extends React.Component {
  componentDidMount() {
    const hash = window.location.hash;
    if (hash) {
      const parsed = hash
        .substring(1)
        .split("&")
        .reduce((obj, str) => {
          const keyVal = str.split("=");
          obj[keyVal[0]] = keyVal[1];
          return obj;
        }, {});

      if (parsed.access_token) {
        this.props.storeToken(parsed.access_token);
      }
    }
  }

  componentDidUpdate() {
    const { token } = this.props;
    if (token) connectWebPlayer(token);
  }

  render() {
    if (this.props.token) return <Redirect to="/player" />;
    return <button onClick={() => loginSpotify()}>login</button>;
  }
}

const mapStateToProps = state => {
  return {
    token: state.accessToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    storeToken: token => dispatch(storeToken(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
