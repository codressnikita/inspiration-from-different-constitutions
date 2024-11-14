import React, { useState } from "react";
import VideoCard from "./VideoCard";
import DocumentCard from "./DocumentCard";
import DocumentViewer from "./DocumentViewer";
import VideoViewer from "./VideoViewer";
import { Globe, Lightbulb } from "lucide-react";

const OneCountry = ({ country }) => {
  return (
    <div className="bg-gray-100 relative p-8 h-full w-full overflow-y-auto">
      {!country ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-600 h-full">
          <Globe className="w-16 h-16 text-gray-400 mb-4" />
          {/* <p className="text-sm leading-relaxed">
            “One likes to ask whether there can be anything new in a
            Constitution framed at this hour in the history of the world. More
            than hundred years have rolled over when the first written
            Constitution was drafted. It has been followed by many countries
            reducing their Constitutions to writing. What the scope of a
            Constitution should be has long been settled. Similarly, what are
            the fundamentals of a Constitution are recognized all over the
            world. Given these facts, all Constitutions in their main provisions
            must look similar. The only new things, if there can be any, in a
            Constitution framed so late in the day are the variations made to
            remove the faults and to accommodate it to the needs of the
            country.”
          </p> */}

          {/* Author attribution */}
          {/* <p className="text-right text-sm italic">
            - Dr. B. R. Ambedkar, CAD, 4 November 1948
          </p> */}
          {/* Placeholder icon and text */}
          <p className="text-lg font-semibold mt-10">
            Select a country to view details
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Use the list on the left to explore available countries.
          </p>
        </div>
      ) : (
        <>
          {/* Country Name and Bio */}
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            {country.name}
          </h2>

          <div className="flex flex-col justify-start align-top text-gray-700">
            {country.content.split("\n").map((line, index) => (
              <p key={index} className="mb-4">
                {line}
              </p>
            ))}
          </div>
          {country.did_you_know && (
            <div className="relative text-gray-300 mb-6 p-3 rounded bg-black bg-opacity-30">
              <Lightbulb
                className="absolute left-3 top-4 text-yellow-400"
                size={30}
              />
              {country.did_you_know.split("\n").map((line, index) => (
                <p key={index} className="pl-10 mb-4">
                  {line}
                </p>
              ))}
            </div>
          )}
          {/* Image and Image Source */}
          {country.image && (
            <div className="mb-6">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-auto rounded-lg shadow-md"
              />
              {country.image_source && (
                <p className="text-sm text-gray-500 mt-2">
                  <span>Source: </span>
                  {country.image_source}
                </p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OneCountry;
