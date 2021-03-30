import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//takes song list from redux store and make them into props
const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs,
  };
};

//connect returns a func, second () calls the returned function
//second arg is mapDistpatchToProps as an obj
export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
