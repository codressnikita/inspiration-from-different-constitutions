// components/DocumentViewer.js
import React, { useState, useEffect } from "react";
import Modal from "./Modal"; // Adjust path if necessary
import { useScreensaverContext } from "../ScreensaverContext"; // Adjust path if necessary

const getFilenameFromPath = (path) => {
  const start =
    path.indexOf("./archive_origins/") + "./archive_origins/".length;
  const end = path.lastIndexOf(".pdf");
  return path.substring(start, end);
};

const DocumentViewer = ({ document, onClose }) => {
  const docName = getFilenameFromPath(document);
  const { setScreensaverDisabled } = useScreensaverContext();
  const [fileContent, setFileContent] = useState(null);

  useEffect(() => {
    // Disable screensaver when component mounts
    setScreensaverDisabled(true);

    const fetchDocument = async () => {
      try {
        const response = await fetch(document);
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

    // Clean up on component unmount: re-enable screensaver and revoke object URL
    return () => {
      setScreensaverDisabled(false);
      if (fileContent) {
        URL.revokeObjectURL(fileContent);
      }
    };
  }, [document, setScreensaverDisabled]);

  if (!fileContent) return null; // Don't render until content is loaded

  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col h-full">
        <h2 className="text-lg font-bold p-4 h-[50px]">{docName}</h2>
        <div
          className="flex-grow overflow-hidden"
          style={{ maxHeight: "calc(100vh - 50px)" }}
        >
          <iframe src={fileContent} className="w-full h-full" title={docName} />
        </div>
      </div>
    </Modal>
  );
};

export default DocumentViewer;
