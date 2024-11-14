"use client";
import React, { useState, useEffect } from "react";
import { Search, FileText, Video, User, ArrowRight } from "lucide-react"; // Added ArrowRight icon
import countiesData from "/public/countries.json"; // Adjust path if necessary
import OneCountry from "./OneCountry";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null); // State to manage selected country

  // Load the data from the JSON on component mount
  useEffect(() => {
    setCountries(countiesData);
  }, []);

  // Function to handle country click
  const handleCountryClick = (country) => {
    setSelectedCountry(country); // Set selected country by name
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {" "}
      {/* Added overflow-hidden to prevent scrolling */}
      {/* Left Column: Geometrical Pattern and Text */}
      <div className="w-1/4 flex justify-start items-start overflow-y-auto">
        {" "}
        {/* Enable scrolling for the left column */}
        <div className="bg-white backdrop-blur-lg bg-opacity-60 w-full p-4 pr-0 pl-0 m-0">
          {/* Header and Search Bar in line */}
          <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-4 pr-4">
            <h1 className="text-gray-800 text-lg font-bold leading-snug p-3">
              List of Countries
            </h1>
          </div>
          <div className="">
            {countries.map((country) => (
              <div
                key={country.name} // Use name as key
                onClick={() => handleCountryClick(country)} // Handle click
                className={`flex items-center p-3 border-b border-gray-200 cursor-pointer transition-shadow duration-300 
                  ${
                    selectedCountry?.name === country.name
                      ? "bg-gray-100"
                      : "bg-white"
                  }`} // Conditional background color for selected country
              >
                {/* Name */}
                <h2 className="text-base mr-auto">{country.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right Column: Card with Search and List */}
      <div className="w-3/4 flex items-start justify-start">
        <OneCountry country={selectedCountry} />
      </div>
    </div>
  );
};

export default Countries;
