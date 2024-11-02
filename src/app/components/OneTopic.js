import React, { useState } from "react";
import VideoCard from "./VideoCard";
import DocumentCard from "./DocumentCard";
import DocumentViewer from "./DocumentViewer";
import VideoViewer from "./VideoViewer";
import { Files, Video, FileText } from "lucide-react";

const OneTopic = ({ topic }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="bg-gray-200 relative p-8 h-full w-full rounded-lg shadow-inner">
      {!topic ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-600 h-full">
          {/* Placeholder icon and text */}
          <Files className="w-16 h-16 text-gray-400 mb-4" />
          <p className="text-lg font-semibold">
            Select a topic to view details
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Use the list on the left to explore available topics.
          </p>
        </div>
      ) : (
        <>
          {/* Topic Name Header */}
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            {topic.name}
          </h2>

          {/* Videos Section */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Video className="w-5 h-5 mr-2 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800">Videos</h3>
            </div>
            <hr className="border-gray-300 mb-4" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {topic.videos.length > 0 ? (
                topic.videos.map((video) => (
                  <VideoCard
                    key={video.name}
                    vid={video}
                    openVid={() => setSelectedVideo(video)}
                  />
                ))
              ) : (
                <p className="text-gray-500">No videos available.</p>
              )}
            </div>
          </div>

          {/* Documents Section */}
          <div>
            <div className="flex items-center mb-2">
              <FileText className="w-5 h-5 mr-2 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-800">Documents</h3>
            </div>
            <hr className="border-gray-300 mb-4" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {topic.documents.length > 0 ? (
                topic.documents.map((doc) => (
                  <DocumentCard
                    key={doc.name}
                    doc={doc}
                    openDoc={() => setSelectedDocument(doc)}
                  />
                ))
              ) : (
                <p className="text-gray-500">No documents available.</p>
              )}
            </div>
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

export default OneTopic;
