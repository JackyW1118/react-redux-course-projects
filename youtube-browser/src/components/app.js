import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./app.css";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  //deeply nested to get video obj from VideoItem
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      //default video
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui segment">
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail
                  video={this.state.selectedVideo}
                  reference={this.listColRef}
                />
              </div>
              <div className="five wide column height-control">
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
