// components/Landing.js
"use client";

import React from "react";
import Hero from "./Hero";
import WelcomeBanner from "./WelcomeBanner";
import VideoCardPanel from "./VideoCardPanel";

const Landing = ({ isFocused = false, handleVideoClick }) => {
  return (
    <div className="overflow-y-auto h-[calc(100vh-50px)]">
      {" "}
      {/* Adjust height to allow scrolling */}
      <Hero isFocused={isFocused} videoSrc={"/videos/video_main.mp4"} />{" "}
      {/* Pass isFocused to Hero */}
      <div
        className={`transition-opacity duration-500 ${
          isFocused ? "opacity-0" : "opacity-100"
        }`}
      >
        <WelcomeBanner />
        <VideoCardPanel
          isFocused={isFocused}
          handleVideoClick={handleVideoClick}
        />
      </div>
    </div>
  );
};

export default Landing;
