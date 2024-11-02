"use client";
import React, { useState, useEffect } from "react";
import { Search, FileText, Video, User } from "lucide-react"; // Icons
import constituentsData from "/public/constituents.json"; // Adjust path if necessary
import OneConstituent from "./OneConstituent"; // Import the OneConstituent modal component

const Constituents = () => {
  const [constituents, setConstituents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedConstituent, setSelectedConstituent] = useState(null); // State to manage selected constituent

  // Load the data from the JSON on component mount
  useEffect(() => {
    setConstituents(constituentsData);
  }, []);

  // Handle the search functionality
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter the list of constituents based on the search term
  const filteredConstituents = constituents.filter((constituent) =>
    constituent.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle constituent click
  const handleConstituentClick = (constituent) => {
    setSelectedConstituent(constituent); // Set selected constituent
  };

  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage:
          "radial-gradient(145.05% 100% at 50% 0%, #53904d 0%, white 57.38%, #e3b282 88.16%)",
        transition: "transform 0.3s ease", // Smooth transition for background shift
      }}
    >
      {/* Left Column: Geometrical Pattern and Text */}
      <div className="w-1/2 flex justify-start items-center p-4">
        <div className="bg-white backdrop-blur-lg bg-opacity-60 shadow-lg rounded-2xl p-8 w-full max-h-[90vh] overflow-hidden border border-white border-opacity-30">
          {/* Search Bar */}
          <h1 className="text-gray-800 text-xl font-bold leading-snug text-left p-4 pb-6">
            Know your Constituent Assembly Members
          </h1>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search for CA members"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-4 pl-8 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          {/* Scrollable List */}
          <div className="max-h-[calc(90vh-120px)] overflow-y-auto">
            {filteredConstituents.map((constituent) => (
              <div
                key={constituent.id}
                onClick={() => handleConstituentClick(constituent)} // Handle click
                className="flex items-center bg-gray-100 p-3 mb-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                {/* Name */}
                <h2 className="text-base mr-auto">{constituent.name}</h2>

                {/* Bio tag */}
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium mr-2">
                  <User className="inline mr-1 w-4 h-4" /> Bio
                </span>

                {/* Videos tag */}
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm font-medium mr-2">
                  <Video className="inline mr-1 w-4 h-4" />{" "}
                  {constituent.videos.length} Videos
                </span>

                {/* Documents tag */}
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm font-medium">
                  <FileText className="inline mr-1 w-4 h-4" />{" "}
                  {constituent.documents.length} Docs
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right Column: Card with Search and List */}
      <div
        className={
          "w-1/2 flex items-center justify-start p-8 transition-all duration-300"
        }
      >
        <OneConstituent constituent={selectedConstituent} />
      </div>
    </div>
  );
};

export default Constituents;
