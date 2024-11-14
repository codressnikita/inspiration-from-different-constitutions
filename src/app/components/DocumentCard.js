import { FileText } from "lucide-react";

const getFilenameFromPath = (path) => {
  const start =
    path.indexOf("./archive_origins/") + "./archive_origins/".length;
  const end = path.lastIndexOf(".pdf");
  return path.substring(start, end);
};

function DocumentCard({ doc, openDoc }) {
  const docName = getFilenameFromPath(doc);

  return (
    <div
      onClick={() => openDoc(doc)}
      className="inline-flex flex-row items-center justify-start gap-1 cursor-pointer group width-full p-2 rounded bg-gray-400"
    >
      {/* Document icon */}
      <div className="text-white">
        <FileText size={20} />
      </div>

      {/* Document name below the rectangle with hover effect */}
      <div className="text-center text-sm font-medium text-gray-700 group-hover:text-blue-500 group-hover:underline">
        {docName}
      </div>
    </div>
  );
}

export default DocumentCard;
