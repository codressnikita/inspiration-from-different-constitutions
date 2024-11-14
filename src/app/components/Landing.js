// components/Landing.js
"use client";

import Hero from "./Hero";

export default function Landing({
  handleTopicsClick,
  handleCountriesClick,
  handleAlternateConstitutionsClick,
}) {
  return (
    <div className="relative h-screen p-6">
      <Hero videoSrc={"/indian_parliament.mp4"} />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-3xl font-bold mb-8">
          Text to be filled by sindhuri:
        </h1>
        <div className="flex space-x-6">
          <div
            className="bg-blue-500 text-white p-6 rounded cursor-pointer space-y-4"
            onClick={handleCountriesClick}
          >
            {/* Title */}
            <h3 className="text-xl font-semibold">
              Influences to the Constitution
            </h3>
          </div>

          <div
            className="bg-green-500 text-white p-6 rounded cursor-pointer"
            onClick={handleTopicsClick}
          >
            <h3 className="text-xl font-semibold">
              Origins of the Constitution
            </h3>
          </div>
          <div
            className="bg-green-500 text-white p-6 rounded cursor-pointer"
            onClick={handleAlternateConstitutionsClick}
          >
            <h3 className="text-xl font-semibold">
              Alternate Constitutional Conceptions
            </h3>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-5" />
    </div>
  );
}
