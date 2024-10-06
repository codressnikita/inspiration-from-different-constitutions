"use client";

import React from "react";
import Hero from "./Hero";

const ExplainerLanding = ({ isFocused = false, video }) => {
  return (
    <div className="overflow-y-auto h-[calc(100vh-50px)]">
      {" "}
      {/* Adjust height to allow scrolling */}
      <Hero isFocused={isFocused} videoSrc={video.src} />
      {/* Pass isFocused to Hero */}
      <div
        className={`transition-opacity duration-500 ${
          isFocused ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="welcome-banner h-[90vh] flex flex-col items-start justify-center px-10 bg-transparent text-white">
          <h2 className="text-5xl md:text-7xl font-bold">{video.name}</h2>
          <p className="mt-4 text-lg md:text-xl italic text-orange-500 max-w-lg">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExplainerLanding;
