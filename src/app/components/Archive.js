// components/Archive.js
"use client";
import { useState } from "react";
import DocumentCard from "./DocumentCard";
import archiveData from "/public/archive/archive.json"; // Adjust path if necessary
import DocumentViewer from "./DocumentViewer";

const Archive = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Archive</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {archiveData.map((doc) => (
          <DocumentCard
            key={doc.name}
            doc={doc}
            openDoc={() => setSelectedDocument(doc)}
          />
        ))}
      </div>

      {/* Display the DocumentViewer modal if a document is selected */}
      {selectedDocument && (
        <DocumentViewer
          document={selectedDocument}
          onClose={() => setSelectedDocument(null)}
        />
      )}
    </div>
  );
};

export default Archive;
