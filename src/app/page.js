"use client";
import { useState } from "react";
import Countries from "./components/Countries";
import Topics from "./components/Topics";
import AlternateConstitutions from "./components/AlternateConstitutions";
import ActionBar from "./components/ActionBar";
import Landing from "./components/Landing";

export default function Page() {
  const [showCountries, setShowCountries] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showAlternateConstitutions, setShowAlternateConstitutions] =
    useState(false);

  const handleTopicsClick = () => {
    setShowTopics(true);
    setShowCountries(false);
    setShowAlternateConstitutions(false);
  };

  const handleCountriesClick = () => {
    setShowCountries(true);
    setShowTopics(false);
    setShowAlternateConstitutions(false);
  };

  const handleAlternateConstitutionsClick = () => {
    setShowAlternateConstitutions(true);
    setShowCountries(false);
    setShowTopics(false);
  };

  const toHome = () => {
    setShowCountries(false);
    setShowTopics(false);
    setShowAlternateConstitutions(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-hidden pb-14">
        {!showTopics && !showCountries && !showAlternateConstitutions && (
          <Landing
            handleTopicsClick={handleTopicsClick}
            handleCountriesClick={handleCountriesClick}
            handleAlternateConstitutionsClick={
              handleAlternateConstitutionsClick
            }
          />
        )}
        {showCountries && <Countries />}
        {showTopics && <Topics />}
        {showAlternateConstitutions && <AlternateConstitutions />}
      </div>
      <ActionBar
        showCountries={showCountries}
        showTopics={showTopics}
        showAlternateConstitutions={showAlternateConstitutions}
        toHome={toHome}
        handleTopicsClick={handleTopicsClick}
        handleCountriesClick={handleCountriesClick}
        handleAlternateConstitutionsClick={handleAlternateConstitutionsClick}
        className="fixed bottom-0 left-0 right-0 h-12" // Fixed positioning
      />
    </div>
  );
}
