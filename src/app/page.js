"use client";

import { useState } from "react";
import Landing from "./components/Landing";
import ExplainerLanding from "./components/ExplainerLanding";
import ActionBar from "./components/ActionBar";

export default function Home() {
  const [isLandingFocused, setIsLandingFocused] = useState(false);
  const [isExplainerFocused, setIsExplainerFocused] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsLandingFocused(false);
    setIsExplainerFocused(false);
  };

  const handleBackAction = () => {
    setSelectedVideo(null);
    setIsLandingFocused(false);
    setIsExplainerFocused(false);
  };

  const handleLandingWatchFull = () => {
    setIsLandingFocused(true);
  };

  const handleExplainerWatchFull = () => {
    setIsExplainerFocused(true);
  };

  return (
    <>
      {selectedVideo ? (
        <ExplainerLanding
          video={selectedVideo}
          isFocused={isExplainerFocused}
        />
      ) : (
        <Landing
          isFocused={isLandingFocused}
          handleVideoClick={handleVideoClick}
        />
      )}
      <ActionBar
        isLandingFocused={isLandingFocused}
        isExplainerFocused={isExplainerFocused}
        selectedVideo={selectedVideo}
        handleLandingWatchFull={handleLandingWatchFull}
        handleExplainerWatchFull={handleExplainerWatchFull}
        handleBackAction={handleBackAction}
      />
    </>
  );
}
