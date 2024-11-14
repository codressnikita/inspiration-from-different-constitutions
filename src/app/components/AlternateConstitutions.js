"use client";
import React, { useState, useEffect } from "react";
import { Search, FileText, Video, User, ArrowRight } from "lucide-react"; // Added ArrowRight icon
import topicsData from "/public/alternate_constitutions.json"; // Adjust path if necessary
import OneTopic from "./OneTopic";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null); // State to manage selected topic

  // Load the data from the JSON on component mount
  useEffect(() => {
    setTopics(topicsData);
  }, []);

  // Function to handle topic click
  const handleTopicClick = (topic) => {
    setSelectedTopic(topic); // Set selected topic by name
  };

  return (
    <div className="flex h-screen overflow-hidden pb-10">
      {" "}
      {/* Added overflow-hidden to prevent scrolling */}
      {/* Left Column: Geometrical Pattern and Text */}
      <div className="w-1/3 flex justify-start items-start overflow-y-auto">
        {" "}
        {/* Enable scrolling for the left column */}
        <div className="bg-white backdrop-blur-lg bg-opacity-60 shadow-lg w-full p-4 pr-0 m-0">
          {/* Header and Search Bar in line */}
          <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-4 pr-4">
            <h1 className="text-gray-800 text-xl font-bold leading-snug">
              List of Alternate Constitutions
            </h1>
          </div>
          <div className="">
            {topics.map((topic) => (
              <div
                key={topic.name} // Use name as key
                onClick={() => handleTopicClick(topic)} // Handle click
                className={`flex items-center p-3 border-b border-gray-200 cursor-pointer transition-shadow duration-300 
                  ${
                    selectedTopic?.name === topic.name
                      ? "bg-gray-200"
                      : "bg-white"
                  }`} // Conditional background color for selected topic
              >
                {/* Name */}
                <h2 className="text-base mr-auto">{topic.name}</h2>

                {/* Documents tag */}
                {/* <span className="bg-purple-100 text-purple-700 px-2  rounded-full text-sm font-medium mr-2">
                  <FileText className="inline mr-1 w-4 h-4" />
                  {topic.documents.length} Docs
                </span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right Column: Card with Search and List */}
      <div className="w-2/3 flex items-start justify-start">
        <OneTopic topic={selectedTopic} />
      </div>
    </div>
  );
};

export default Topics;
