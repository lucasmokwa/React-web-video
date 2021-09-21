import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: {} };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: { video } });
  };

  onSearchSubmit = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
