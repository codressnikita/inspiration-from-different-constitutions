// components/DocumentViewer.js
import React, { useState, useEffect } from "react";
import Modal from "./Modal"; // Adjust path if necessary

const DocumentViewer = ({ document, onClose }) => {
  const [fileContent, setFileContent] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await fetch(document.path);
        if (!response.ok) {
          throw new Error("Failed to fetch document.");
        }
        const content = await response.blob();
        const fileURL = URL.createObjectURL(content);
        setFileContent(fileURL);
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDocument();

    // Clean up the object URL on component unmount
    return () => {
      if (fileContent) {
        URL.revokeObjectURL(fileContent);
      }
    };
  }, [document]);

  if (!fileContent) return null; // Don't render until content is loaded

  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col h-full">
        {/* Fixed header with height of 50px */}
        <h2 className="text-lg font-bold p-4 h-[50px]">{document.name}</h2>

        {/* Document container with max-height set to calc(100vh - 50px) */}
        <div
          className="flex-grow overflow-hidden"
          style={{ maxHeight: "calc(100vh - 50px)" }}
        >
          {document.type === "pdf" ? (
            <iframe
              src={fileContent}
              className="w-full h-full"
              title={document.name}
            />
          ) : (
            <img
              src={fileContent}
              alt={document.name}
              className="w-full h-auto object-contain"
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default DocumentViewer;
