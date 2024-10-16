"use client";
import React, { useState, useEffect } from "react";
import constituentsData from "/public/constituents.json"; // Adjust the path if necessary

const Constituents = () => {
  const [constituents, setConstituents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <div>
      {/* Banner with inline Header and Search Bar */}
      <div
        className="bg-blue-600 mb-4 w-full flex items-center justify-between"
        style={{
          marginTop: 0,
          backgroundImage: "url('/we_the_people.jpg')", // Set the background image
          backgroundBlendMode: "overlay", // Blend the background color and image
          backgroundColor: "rgba(0, 0, 255, 0.5)", // Example color overlay, adjust as needed
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px", // Set a standard height for the banner
        }}
      >
        <h1 className="text-xl font-bold text-white">Constituents</h1>
        <input
          type="text"
          placeholder="Search Constituents..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Constituent Cards */}
      <div className="space-y-4">
        {filteredConstituents.map((constituent) => (
          <div
            key={constituent.id}
            className="flex items-center bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Avatar */}
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold mr-3">
              {constituent.image ? (
                <img
                  src={constituent.image}
                  alt={constituent.name}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.onerror = null; // Prevents looping
                    e.target.src = ""; // Set a blank src to avoid broken image
                  }}
                />
              ) : (
                constituent.name[0].toUpperCase()
              )}
            </div>

            {/* Name */}
            <h2 className="text-lg font-semibold mr-auto">
              {constituent.name}
            </h2>

            {/* Bio tag */}
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium mr-2">
              1 Bio
            </span>

            {/* Videos tag */}
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm font-medium mr-2">
              {constituent.videos.length} Videos
            </span>

            {/* Documents tag */}
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm font-medium">
              {constituent.documents.length} Docs
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Constituents;
