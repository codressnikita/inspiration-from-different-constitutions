"use client";

import Hero from "./components/Hero";
import WelcomeBanner from "./components/WelcomeBanner";
import VideoCardPanel from "./components/VideoCardPanel";
import Screensaver from "./components/Screensaver";

export default function Home() {
  const handleVideoClick = (video) => {
    console.log("Video clicked:", video);
    // Implement logic to play the video or navigate
  };

  return (
    <>
      <Hero />
      <WelcomeBanner />
      <VideoCardPanel handleCardClick={handleVideoClick} />
      <Screensaver />
    </>
  );
}
