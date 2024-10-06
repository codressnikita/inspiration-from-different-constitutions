"use client";
import VideoCard from "./VideoCard";

export default function VideoCardPanel({ handleVideoClick }) {
  const videos = [
    {
      name: "Explainer 1",
      thumbnail: "/thumbnails/thumbnail1.webp",
      src: "/videos/video1.mp4",
      description: "lajhdkjahsd akjhsdkasjhd akhdajksdhkjasd kasjhdkajhd",
    },
    {
      name: "Explainer 2",
      thumbnail: "/thumbnails/thumbnail2.webp",
      src: "/videos/video2.mp4",
      description: "lajhdkjahsd akjhsdkasjhd akhdajksdhkjasd kasjhdkajhd",
    },
    {
      name: "Explainer 1",
      thumbnail: "/thumbnails/thumbnail1.webp",
      src: "/videos/video1.mp4",
      description: "lajhdkjahsd akjhsdkasjhd akhdajksdhkjasd kasjhdkajhd",
    },
    {
      name: "Explainer 2",
      thumbnail: "/thumbnails/thumbnail2.webp",
      src: "/videos/video2.mp4",
      description: "lajhdkjahsd akjhsdkasjhd akhdajksdhkjasd kasjhdkajhd",
    },
    {
      name: "Explainer 1",
      thumbnail: "/thumbnails/thumbnail1.webp",
      src: "/videos/video1.mp4",
      description: "lajhdkjahsd akjhsdkasjhd akhdajksdhkjasd kasjhdkajhd",
    },
    {
      name: "Explainer 2",
      thumbnail: "/thumbnails/thumbnail2.webp",
      src: "/videos/video2.mp4",
      description: "lajhdkjahsd akjhsdkasjhd akhdajksdhkjasd kasjhdkajhd",
    },
    // Add more video objects here
  ];

  return (
    <div className="video-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          video={video}
          handleClick={() => handleVideoClick(video)}
        />
      ))}
    </div>
  );
}
