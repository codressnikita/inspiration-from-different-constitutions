"use client";
import { useState } from "react";
import Countries from "./components/Countries";
import Topics from "./components/Topics";
import ActionBar from "./components/ActionBar";
import Landing from "./components/Landing";

export default function Page() {
  const [showCountries, setShowCountries] = useState(false); // Initialize with true
  const [showTopics, setShowTopics] = useState(false);

  const handleTopicsClick = () => {
    setShowTopics(true);
    setShowCountries(false);
  };
  const handleCountriesClick = () => {
    setShowCountries(true);
    setShowTopics(false);
  };

  const toHome = () => {
    setShowCountries(false);
    setShowTopics(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-hidden pb-14">
        {!showTopics && !showCountries && (
          <Landing
            handleTopicsClick={handleTopicsClick}
            handleCountriesClick={handleCountriesClick}
          />
        )}
        {showCountries && <Countries />}
        {showTopics && <Topics />}
      </div>
      <ActionBar
        showCountries={showCountries}
        showTopics={showTopics}
        toHome={toHome}
        handleTopicsClick={handleTopicsClick}
        handleCountriesClick={handleCountriesClick}
        className="fixed bottom-0 left-0 right-0 h-12" // Fixed positioning
      />
    </div>
  );
}
