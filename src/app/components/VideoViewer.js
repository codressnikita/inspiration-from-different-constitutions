// components/VideoViewer.js
import React, { useState, useEffect } from "react";
import Modal from "./Modal"; // Adjust path if necessary

const VideoViewer = ({ video, onClose }) => {
  const [fileContent, setFileContent] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(video.path);
        if (!response.ok) {
          throw new Error("Failed to fetch video.");
        }
        const content = await response.blob();
        const fileURL = URL.createObjectURL(content);
        setFileContent(fileURL);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();

    // Clean up the object URL on component unmount
    return () => {
      if (fileContent) {
        URL.revokeObjectURL(fileContent);
      }
    };
  }, [video]);

  if (!fileContent) return null; // Don't render until content is loaded

  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col h-full">
        {/* Fixed header with height of 50px */}
        <h2 className="text-lg font-bold p-4 h-[50px]">{video.name}</h2>

        {/* Video container with max-height set to calc(100vh - 50px) */}
        <div
          className="flex-grow overflow-hidden"
          style={{ maxHeight: "calc(100vh - 50px)" }}
        >
          <video
            src={fileContent}
            controls
            className="w-full h-full object-contain"
            title={video.name}
          />
        </div>
      </div>
    </Modal>
  );
};

export default VideoViewer;
