"use client";
import { useState } from "react";
import Landing from "./components/Landing";
import Constituents from "./components/Constituents";
import ActionBar from "./components/ActionBar";

export default function Page() {
  const [showConstituents, setShowConstituents] = useState(false);

  // Handle the click for the "Constituents" box
  const handleConstituentsClick = () => {
    setShowConstituents(true);
  };

  // Handle the back action to go back to the landing page
  const backFromConstituent = () => {
    setShowConstituents(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-y-auto">
        {!showConstituents ? (
          <Landing onConstituentsClick={handleConstituentsClick} />
        ) : (
          <Constituents />
        )}
      </div>
      <ActionBar
        showConstituents={showConstituents}
        backFromConstituent={backFromConstituent}
      />
    </div>
  );
}
