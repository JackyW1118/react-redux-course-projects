import React from "react";
import VideoItem from "./VideoItem";

//destruct props

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return (
    <div style={{ maxHeight: "0px" }} className="ui relax divided list">
      {videoItems}
    </div>
  );
};

export default VideoList;
