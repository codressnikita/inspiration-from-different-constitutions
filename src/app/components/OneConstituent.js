// components/OneConstituent.js
import React, { useState } from "react";
import VideoCard from "./VideoCard";
import DocumentCard from "./DocumentCard";
import DocumentViewer from "./DocumentViewer";
import VideoViewer from "./VideoViewer";

const OneConstituent = ({ constituent }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="relative p-8 justify-start">
      {!constituent ? (
        <h1 className="text-gray-800 text-5xl font-bold leading-snug text-center">
          Select a CA member to know more
        </h1>
      ) : (
        <>
          <h2 className="text-2xl font-bold">{constituent.name}</h2>
          <p className="mt-2">{constituent.bio}</p>

          <h3 className="mt-4 font-semibold">Videos:</h3>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {constituent.videos.length > 0 ? (
              constituent.videos.map((video) => (
                <VideoCard
                  key={video.name}
                  vid={video}
                  openVid={() => setSelectedVideo(video)}
                />
              ))
            ) : (
              <p>No videos available.</p>
            )}
          </div>

          <h3 className="mt-4 font-semibold">Documents:</h3>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {constituent.documents.length > 0 ? (
              constituent.documents.map((doc) => (
                <DocumentCard
                  key={doc.name}
                  doc={doc}
                  openDoc={() => setSelectedDocument(doc)}
                />
              ))
            ) : (
              <p>No documents available.</p>
            )}
          </div>

          {/* DocumentViewer to display selected document */}
          {selectedDocument && (
            <DocumentViewer
              document={selectedDocument}
              onClose={() => setSelectedDocument(null)}
            />
          )}

          {/* VideoViewer to display selected video */}
          {selectedVideo && (
            <VideoViewer
              video={selectedVideo}
              onClose={() => setSelectedVideo(null)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default OneConstituent;
