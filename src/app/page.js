"use client";
import { useState } from "react";
import Constituents from "./components/Constituents";
import Archive from "./components/Archive";
import ActionBar from "./components/ActionBar";
import Landing from "./components/Landing";

export default function Page() {
  const [showConstituents, setShowConstituents] = useState(true); // Initialize with true
  const [showArchive, setShowArchive] = useState(false);

  const handleArchiveClick = () => {
    setShowArchive(true);
    setShowConstituents(false);
  };
  const handleConstituentClick = () => {
    setShowConstituents(true);
    setShowArchive(false);
  };

  const backFromConstituent = () => {
    setShowConstituents(false);
    setShowArchive(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <div
        className="flex-grow overflow-hidden pb-12"
        style={{ paddingBottom: "50px" }}
      >
        {!showArchive && !showConstituents && (
          <Landing
            handleArchiveClick={handleArchiveClick}
            handleConstituentClick={handleConstituentClick}
          />
        )}
        {showConstituents && <Constituents />}
        {showArchive && <Archive />}
      </div>
      <ActionBar
        showConstituents={showConstituents}
        showArchive={showArchive}
        backFromConstituent={backFromConstituent}
        backFromArchive={backFromConstituent}
        handleArchiveClick={handleArchiveClick}
        handleConstituentClick={handleConstituentClick}
        className="fixed bottom-0 left-0 right-0 h-12" // Fixed positioning
      />
    </div>
  );
}
