import React, { useState } from "react";
import VideoCard from "./VideoCard";
import DocumentCard from "./DocumentCard";
import DocumentViewer from "./DocumentViewer";
import VideoViewer from "./VideoViewer";
import { Files, Lightbulb, FileText } from "lucide-react";

const OneTopic = ({ topic }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  return (
    <div className="bg-gray-200 relative p-8 h-full w-full rounded-lg shadow-inner overflow-y-auto">
      {!topic ? (
        <div className="flex flex-col items-center justify-start text-center text-gray-600 h-full">
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
          {/* Topic Name and Bio with QR code aligned to the right */}
          <div className="flex items-start justify-between">
            {/* Topic Name */}
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              {topic.name}
            </h2>
          </div>

          <div className="flex flex-col justify-start align-top text-gray-700">
            {topic.description.split("\n").map((line, index) => (
              <p key={index} className="mb-4">
                {line}
              </p>
            ))}
          </div>
          {topic.did_you_know && (
            <div className="relative text-gray-300 mb-6 p-3 rounded bg-black bg-opacity-30">
              <Lightbulb
                className="absolute left-3 top-4 text-yellow-400"
                size={20}
              />
              {topic.did_you_know.split("\n").map((line, index) => (
                <p key={index} className="pl-10 mb-4">
                  {line}
                </p>
              ))}
            </div>
          )}
          {/* Documents Section */}
          {topic.documents.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {topic.documents.map((doc) => (
                <DocumentCard
                  key={doc}
                  doc={doc}
                  openDoc={() => setSelectedDocument(doc)}
                />
              ))}
            </div>
          )}
          {/* QR Code Section */}
          {topic.qr_code && (
            <div className="flex flex-col items-center ml-4">
              <h1 className="text-sm font-medium text-gray-600 mb-2">
                Link to Document
              </h1>
              <img src={topic.qr_code} alt="QR code" className="w-60 h-60" />
            </div>
          )}

          {/* DocumentViewer to display selected document */}
          {selectedDocument && (
            <DocumentViewer
              document={selectedDocument}
              onClose={() => setSelectedDocument(null)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default OneTopic;
