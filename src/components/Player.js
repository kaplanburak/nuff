import React from "react";
import { connect } from "react-redux";
import { getCurrentPlayback, search, playAlbum } from "../actions";

class Player extends React.Component {
  state = {
    searchTerm: ""
  };

  componentDidMount() {
    this.props.getCurrentPlayback();
  }

  render() {
    const { searchResult, search, playAlbum } = this.props;
    return (
      <div style={{ display: "flex" }}>
        <div>
          <button>Play</button>
          <button>Pause</button>
          <button>Next</button>
          <button>Previous</button>
        </div>
        <div style={{ marginLeft: 15 }}>
          <input type="text" placeholder="Search for albums" value={this.state.searchTerm} onChange={e => this.setState({ searchTerm: e.target.value })} />
          <button onClick={() => search(this.state.searchTerm)}>Search</button>
        </div>
        <div style={{ marginLeft: 15, display: searchResult && searchResult.albums ? "block" : "none" }}>
          Albums:
          <ul>
            {searchResult && searchResult.albums
              ? searchResult.albums.items.map((item, i) => {
                  return (
                    <li key={i}>
                      <span>{`${item.artists[0].name} - ${item.name} (${item.release_date.split("-")[0]})`}</span>
                      <button style={{ marginLeft: 25 }} onClick={() => playAlbum(item.id)}>
                        Play
                      </button>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playback: state.player.currentPlayback,
    searchResult: state.player.searchResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentPlayback: () => dispatch(getCurrentPlayback()),
    search: term => dispatch(search(term)),
    playAlbum: id => dispatch(playAlbum(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
